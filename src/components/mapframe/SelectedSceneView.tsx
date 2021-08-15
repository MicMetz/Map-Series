import {Box} from '@material-ui/core';
import * as React from "react";
import {useRef, useState, useEffect} from "react";
import {loadModules} from "esri-loader";
import MapsLayer from "./MapsLayer";


type Props = {
	onSetSceneView: (selectedSceneView: any) => void;
}

export default function SelectedSceneView(props: Props) {
	const sceneViewRef              = useRef(null);
	const [sceneView, setSceneView] = useState(null);

	useEffect(() => {
		loadModules([
			"esri/config",
			"esri/Map",
			"esri/views/SceneView",
			"esri/layers/WMTSLayer",
			"esri/layers/ElevationLayer",
		]).then(([esriConfig, Map, SceneView, WMTSLayer]) => {
			esriConfig.request.httpsDomains = ["geoserver.mars26.com"];

			const marsImagery = new WMTSLayer({
				url        : "https://webdevgroupcu.org/mime9599/DEV/WarDriver/WarDriver2D-5/",
				activeLayer: {
					id: "marsmaptiles:marsmaptiles",
				},
				serviceMode: "KVP",
			});

			const mapsceneView = new SceneView({
				tilingSchemeLocked: true,
				map               : new Map({
					ground: {
						// layers: [marsElevation],
					},
					layers: [marsImagery],
				}),
				container         : sceneViewRef.current,
				qualityProfile    : "high",
				// setting the spatial reference for Mars_2000 coordinate system
				spatialReference: {
					wkid: 104971,
				},
				camera          : {
					position: {
						x               : -112,
						y               : -25,
						z               : 1000000,
						spatialReference: 104971,
					},
					heading : 29,
					tilt    : 49,
				},
			});

			mapsceneView.ui.move("zoom", "bottom-left");
			mapsceneView.ui.move("navigation-toggle", "bottom-left");
			mapsceneView.ui.move("compass", "bottom-left");
			mapsceneView.ui.remove("attribution");

			setSceneView(mapsceneView);
			props.onSetSceneView(mapsceneView);
		}).catch((error) => {
			console.error("Error while constructing SceneView:", error);
		});

		return () => {
			if (sceneView) {
				(sceneView as any).destroy();
				props.onSetSceneView(null);
			}
		};
	}, [props, sceneView]);


	return (
		<Box sx = {{display: "block"}}>
			<div ref = {sceneViewRef} className = "h-full"/>
			<MapsLayer sceneView = {sceneView}/>
		</Box>
	);
}

