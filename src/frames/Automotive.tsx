import {createStyles, makeStyles} from "@material-ui/styles";
import React                      from 'react'
import {useRef, useEffect}        from "react";
import {loadModules}              from "esri-loader";



const useStyles = makeStyles(createStyles({
	root       : {},
	insetDiv   : {
		position: "absolute",
		right    : "6px",
		bottom  : 80,
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


export default function LoadMapAutomotive() {
	const classes = useStyles();

	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);
	const mapInset   = useRef(null);


	useEffect(() => {
		// define the view here so it can be referenced in the clean up function
		let view: { destroy: () => void; } | null;

		loadModules([
			"esri/views/MapView", "esri/WebMap",
			"esri/config", "esri/widgets/Compass",
			"esri/widgets/ScaleBar", "esri/widgets/Legend", "esri/widgets/Expand",
		], {
			css: true
		}).then(([MapView, WebMap, esriConfig, Compass, ScaleBar, Legend, Expand]) => {
			esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com"


			const webmap = new WebMap({
				portalItem: {
					id: "6ee9b687b4c9404d98ebd3baddad5fdb"
				}
			});

			const overviewMap = new WebMap({
				basemap: "streets-vector"
			});

			const view         = new MapView({
				map        : webmap,
				container  : mapElement.current,
				constraints: {
					rotationEnabled: false,
				}
			});
			view.ui.components = [];

			const insetView         = new MapView({
				map        : overviewMap,
				container  : mapInset.current,
				center     : [-122.30, 37.80],
				zoom       : 5,
				constraints: {
					rotationEnabled: false
				}
			});
			insetView.ui.components = [];

			const scale = new ScaleBar({
				view: view,
				unit: "dual",
			});

			const compass = new Compass({
				view: view,
			});

			const legendExpand = new Expand({
				view    : view,
				content : new Legend({
					view: view
				}),
				expanded: view.widthBreakpoint !== "xsmall"
			});

			const titleContent                 = document.createElement("div");
			titleContent.style.padding         = "15px";
			titleContent.style.backgroundColor = "white";
			titleContent.style.width           = "500px";
			titleContent.innerHTML             = [
				"<div id='title' class='esri-widget'>",
				"<span id='num-cameras'></span><span id='avg-open-time'></span>",
				"</div>"
			].join(" ");

			const titleExpand = new Expand({
				expandIconClass: "esri-icon-dashboard",
				expandTooltip  : "Summary stats",
				view           : view,
				content        : titleContent,
				expanded       : view.widthBreakpoint !== "xsmall"
			});

			view.watch("widthBreakpoint", function (newValue: String) {
				titleExpand.expanded  = newValue !== "xsmall";
				legendExpand.expanded = newValue !== "xsmall";
			});

			view.ui.add(titleExpand, "top-right");
			view.ui.add(compass, "top-left");
			view.ui.add(scale, "bottom-right");
			view.ui.add(insetView, "bottom-right");
			view.ui.add(legendExpand, "bottom-left");



		});

	});

	return (
		<div style = {{
			height: "100%",
			width : "100%"
		}} ref = {mapElement}
		>
			<div className = {classes.insetDiv} ref = {mapInset}/>

		</div>
	)
}
