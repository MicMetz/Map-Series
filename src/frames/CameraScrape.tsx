import {createStyles, makeStyles} from "@material-ui/styles";
import React, {useRef, useEffect} from "react";
import {loadModules}              from "esri-loader";
import {Chart, Doughnut, Bar}     from 'react-chartjs-2';



const useStyles = makeStyles(createStyles({
	root       : {},
	overviewDiv: {
		position: "absolute",
		right   : "6px",
		width   : "200px",
		height  : "200px",
		border  : "1px solid black",
		overflow: "hidden",
	},
	panel      : {
		position: "absolute",
		right   : 0,
		height  : "500%",
		width   : "30%",
		overflow: "visible",

	},
	miniTitle  : {
		color     : "#149dcf",
		fontSize  : "10pt",
		fontWeight: "bolder",
	},
	numCameras : {
		color     : "#ed5050",
		fontSize  : "36pt",
		fontWeight: "bolder",
		lineHeight: 0.8,
	},
	amgType    : {
		color     : "#c3cf14",
		fontSize  : "17pt",
		fontWeight: "bolder",
		lineHeight: 0.8,
	},
	avgOpenTime: {
		color     : "#149dcf",
		fontSize  : "20pt",
		fontWeight: "bolder",
		lineHeight: 0.8,
	},

	data   : {
		labels  : ["Yawcam", "Android", "DVR", "XP", "Unknown"],
		datasets: [
			{
				label          : "Open/Inconclusive",
				backgroundColor: "#149dcf",
				stack          : "Stack 0",
				data           : [985, 1000, 217, 855, 0]
			},
			{
				label          : "Secure/Protected",
				backgroundColor: "#ed5050",
				stack          : "Stack 0",
				data           : [1, 0, 1, 0, 0, 0]
			}
		]
	},
	options: {
		responsive: false,
		legend    : {
			position: "top"
		},
		title     : {
			display: true,
			text   : "Discovered Webcam Devices"
		},
		scales    : {
			xAxes: [
				{
					stacked: true,
					ticks  : {
						beginAtZero: true
					}
				}
			],

		}
	}

}));


interface ArcProps {
	Id: string;
	ThreeDtype: boolean;

	map_Features?: boolean;
	type?: string;
	names?: string[];
	labels?: string[];
	datasets?: [
		{
			label: string,
			backgroundColor: string,
			stack: string,
			data: number[]
		},
		{
			label: string,
			backgroundColor: string,
			stack: string,
			data: number[]
		},
	];
};


export function LoadMapCamera() {
	const classes = useStyles();

	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);
	const mapInset   = useRef(null);
	// const overviewDiv = () => (<div className = {classes.overviewDiv}/>);

	let options: {
		responsive: false,
		legend: {
			position: "top"
		},
		title: {
			display: true,
			text: string
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					ticks: {
						beginAtZero: true
					}
				}
			],
			yAxes: [
				{
					stacked: true
				}
			]
		}
	};

	useEffect(() => {
		// define the view here so it can be referenced in the clean up function
		let view: { destroy: () => void; } | null;

		let yearChart,
		    typeChart,
		    accessibilityChart,
		    totalNumber,
		    amountCam,
		    avgOpenTime;

		loadModules([
			"esri/views/MapView", "esri/WebMap",
			"esri/config", "esri/core/watchUtils",
			"esri/widgets/Legend", "esri/widgets/Expand",
			"esri/widgets/Compass", "esri/widgets/ScaleBar",
			"esri/Graphic"
		], {
			css: true
		}).then(([MapView, WebMap, esriConfig, watchUtils, Legend, Expand, Compass, ScaleBar, Graphic]) => {
			esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com"


			const webmap = new WebMap({
				portalItem: {
					id: "2a766a411bcb41d8b76f14ec038ffe20"
				}
			});

			const overviewMap = new WebMap({
				basemap: "streets-vector"
			});

			const view         = new MapView({
				map      : webmap, // use the ref as a container
				container: mapElement.current,
				/*highlightOptions: {
				 color      : "black",
				 haloOpacity: 0.65,
				 fillOpacity: 0.45
				 }*/
			});
			view.ui.components = [];

			const mapView         = new MapView({
				container  : mapInset.current,
				center     : [-122.30, 37.80],
				zoom       : 5,
				map        : overviewMap,
				constraints: {
					rotationEnabled: false
				}
			});
			mapView.ui.components = [];


			// view.ui.add("overviewDiv", "bottom-right");


			function setup() {
				const extent3Dgraphic = new Graphic({
					geometry: null,
					symbol  : {
						type   : "simple-fill",
						color  : [0, 0, 0, 0.5],
						outline: null
					}
				});
				mapView.graphics.add(extent3Dgraphic);

				watchUtils.init(mapView, "extent", function () {
					// Sync the overview map location
					// whenever the 3d view is stationary
					if (mapView.stationary) {
						mapView
							.goTo({
								center: mapView.center,
								scale :
									mapView.scale *
									2 *
									Math.max(
										mapView.width / mapView.width,
										mapView.height / mapView.height
									)
							})
							.catch(function (error: { name: string }) {
								// ignore goto-interrupted errors
								if (error.name != "view:goto-interrupted") {
									console.error(error);
								}
							});
					}
				});
			};

			const compass = new Compass({
				view    : view,
				position: "top-left",
			});
			view.ui.add(compass, {position: "top-left"});

			const scaleBar = new ScaleBar({
				view: view,
				unit: "dual", // The scale bar displays both metric and non-metric units.
			});
			view.ui.add(scaleBar, {position: "top-left"});


			// Displays instructions to the user for understanding the sample
			// And places them in an Expand widget instance
			const titleContent                 = document.createElement("div");
			titleContent.style.padding         = "15px";
			titleContent.style.backgroundColor = "white";
			titleContent.style.width           = "500px";
			titleContent.innerHTML             = [
				"<div id='title' class='esri-widget'>",
				"<span id='num-cameras'>3057</span> recording devices were found on <span id='amg-type'>12/05/2020</span>. The average time a device has been",
				"discoverable is <span id='avg-open-time'>100</span> hours.",
				"</div>"
			].join(" ");

			const titleExpand = new Expand({
				expandIconClass: "esri-icon-dashboard",
				expandTooltip  : "Summary stats",
				view           : view,
				content        : titleContent,
				expanded       : view.widthBreakpoint !== "xsmall"
			});
			view.ui.add(titleExpand, "top-right");


			const legendExpand = new Expand({
				view   : view,
				content: new Legend({
					view: view
				}),

				expanded: view.widthBreakpoint !== "xsmall"
			});
			view.ui.add(legendExpand, "bottom-left");


			view.watch("widthBreakpoint", function (newValue: String) {
				titleExpand.expanded  = newValue !== "xsmall";
				legendExpand.expanded = newValue !== "xsmall";
			});


			view.when().then(function () {
				// Create the charts when the view is ready
				// createCharts();
			});


			const totalNumber = document.getElementById("num-cameras");
			const amountCam   = document.getElementById("amg");
			const avgOpenTime = document.getElementById("avg-open-time");


			const typeCanvas = document.getElementById("typeChart");
			const typeChart  = {
				type   : "horizontalBar",
				data   : {
					labels  : ["Yawcam", "Android", "DVR", "XP", "Unknown"],
					datasets: [
						{
							label          : "Open/Inconclusive",
							backgroundColor: "#149dcf",
							stack          : "Stack 0",
							data           : [985, 1000, 217, 855, 0]
						},
						{
							label          : "Secure/Protected",
							backgroundColor: "#ed5050",
							stack          : "Stack 0",
							data           : [1, 0, 1, 0, 0, 0]
						}
					]
				},
				options: {
					responsive: false,
					legend    : {
						position: "top"
					},
					title     : {
						display: true,
						text   : "Discovered Webcam Devices"
					},
					scales    : {
						xAxes: [
							{
								stacked: true,
								ticks  : {
									beginAtZero: true
								}
							}
						],
						yAxes: [
							{
								stacked: true
							}
						]
					}
				}
			};


			const accessibilityCanvas = document.getElementById("accessibility-chart");
			const accessibilityChart  = {
				type   : "doughnut",
				data   : {
					labels  : [
						"Open",
						"Inconclusive",
						"Closed"
					],
					datasets: [
						{
							backgroundColor: ["#149dcf", "#a6c736", "#ed5050"],
							borderColor    : "rgb(255, 255, 255)",
							borderWidth    : 1,
							data           : [925, 1851, 281]
						}
					]
				},
				options: {
					responsive      : false,
					cutoutPercentage: 35,
					legend          : {
						position: "bottom"
					},
					title           : {
						display: true,
						text   : "Status of the connection"
					}
				}
			}


		});


		return () => {

			// clean up the map view
			if (!!view) {
				view.destroy();
				view = null;
			}
		};
	});


	return (
		<div style = {{
			// marginTop: 56,
			// height   : "calc(100% - 56px)",
			height: "100%",
			width : "100%"
		}} ref = {mapElement}
		>
			<div className = {classes.overviewDiv} ref = {mapInset}/>

			<div className = {classes.panel}>
				<canvas id = "typeChart" height = "400" width = "400"></canvas>
				<canvas id = "accessibility-chart" width = "400" height = "220"></canvas>

				<Bar data = {classes.data} width = {400} height = {400} options = {classes.options}/>
			</div>
		</div>
	);
}
