import {createStyles, makeStyles} from "@material-ui/styles";
import React, {useRef, useEffect} from "react";
import {loadModules}              from "esri-loader";
import {render}                   from "react-dom";



const enum FrameKey {
	Camera   = "2a766a411bcb41d8b76f14ec038ffe20",
	ALPR     = "175ee55082e349caa4c747b88b5d0217",
	CANBUS   = "472e736fcd984cf6bd00e942e14a5b5d",
	CONFLICT = "d8e0e9d9acf1432b9cf7d4d3d41817c5",
	HAWAII   = "573d77a382ae4d14856f0f2110be14af",
	TWITTER  = "4ed76d16ebdd47a78b32954420fce152",
	VOTING   = "865e34f2e17f45d0a198382045bce411",
	WARDRIVE = "2ab4383ba06a401690c7ed54c50fc726"
}


const Conflict = {
	kind: FrameKey.CONFLICT,

}

const Hawaii = {
	kind: FrameKey.HAWAII,

}

const Wardrive = {
	kind: FrameKey.WARDRIVE,

}

const OaklandALPR = {
	kind: FrameKey.ALPR,
}

const Twitter = {
	kind: FrameKey.TWITTER,

}


interface ArcProps {
	Id: string;

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


const useStyles = makeStyles(createStyles({
	root    : {},
	panel   : {},
	subTitle: {},
	insetDiv: {
		position: "absolute",
		right   : "6px",
		width   : "200px",
		height  : "200px",
		border  : "1px solid black",
		overflow: "hidden",
	},

	data   : {},
	options: {
		response: false,
		title   : {},
		scales  : {
			xAxes: [{}],
		},
		legend  : {},

	},

}));


export function LoadMap(props: ArcProps) {
	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);
	const mapInset   = useRef(null);


	useEffect(() => {

			// define the view here so it can be referenced in the clean up function
			let view: { destroy: () => void; } | null;
			loadModules([
				"esri/views/MapView", "esri/WebMap",
				"esri/config", "esri/core/watchUtils",
				"esri/widgets/Legend", "esri/widgets/Expand",
				"esri/widgets/Compass", "esri/widgets/ScaleBar",
				"esri/Graphic"
			], {
				css: true
			}).then(([MapView, WebMap, esriConfig, Legend, Expand, Compass, ScaleBar]) => {
				esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com";

				if (props.map_Features) {

				}

				const webmap = new WebMap({
					portalItem: {
						id: props.Id
					}
				});

				const view         = new MapView({
					map: webmap,
					// use the ref as a container
					container  : mapElement.current,
					constraints: {
						maxZoom        : 530000,
						minScale       : 5300000,
						rotationEnabled: false,
					}
				});
				view.ui.components = []

				const overviewMap = new WebMap({
					basemap: "streets-vector"
				});

				const compass = new Compass({
					view: view
				});

				const scaleBar = new ScaleBar({
					view: view,
					unit: "dual" // The scale bar displays both metric and non-metric units.
				});

				const mapView         = new MapView({
					container  : "overviewDiv",
					center     : [-122.30, 37.80],
					zoom       : 5,
					map        : overviewMap,
					constraints: {
						rotationEnabled: false
					}
				});
				mapView.ui.components = [];
				view.ui.add("overviewDiv", "bottom-right");


				const titleExpand = new Expand({
					expandIconClass: "esri-icon-dashboard",
					expandTooltip  : "Summary stats",
					view           : view,
					// content        : titleContent,
					expanded: view.widthBreakpoint !== "xsmall"
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
		<div style = {{
			marginTop: 56,
			height   : "calc(100% - 56px)",
			width    : "100%"
		}} ref = {mapElement}
		>
			<div ref = {mapInset}/>
		</div>
	);
}
