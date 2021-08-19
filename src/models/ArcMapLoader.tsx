import React, {useRef, useEffect} from "react";
import {loadModules}              from "esri-loader";
import {render}                   from "react-dom";



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
		}
	];
}


export function LoadMap(props: ArcProps) {
	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);

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
			if (props.map_Features) {

			}
			// define the view here so it can be referenced in the clean up function
			let view: { destroy: () => void; } | null;
			loadModules(["esri/views/MapView", "esri/WebMap", "esri/config"], {
				css: true
			}).then(([MapView, WebMap, esriConfig]) => {
				esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com";

				const webmap = new WebMap({
					portalItem: {
						id: props.Id
					}
				});

				view = new MapView({
					map: webmap,
					// use the ref as a container
					container: mapElement.current
				});
			});

			return () => {
				// clean up the map view
				if (!!view) {
					view.destroy();
					view = null;
				}
			};
		}, [props]
	);


	return (
		<div
			style = {{
				marginTop: 56,
				height   : "calc(100% - 56px)",
				width    : "100%"
			}} ref = {mapElement}
		/>
	);
}
