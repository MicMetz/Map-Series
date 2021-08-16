import {Box}      from '@material-ui/core';
import * as React from "react";

import {useRef, useState, useEffect} from "react";
import {loadModules}                 from "esri-loader";
import MapsLayer                     from "./MapsLayer";
import MapView                       from "@arcgis/core/views/MapView";
import WebMap                        from "@arcgis/core/WebMap";
import {makeStyles, createStyles}    from "@material-ui/styles";
import AppFrame                      from "../app/AppFrame";

/*

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
 "esri/layers/Layer",
 "esri/layers/ElevationLayer",
 ]).then(([esriConfig, Map, SceneView, Layer]) => {
 esriConfig.request.httpsDomains = [""];


 const mapLayer = new Layer({
 portalItem: {
 id: "d2632738d98e40818795ee1c8a2efaff",
 },
 });

 const mapsceneView = new SceneView({
 map: new Map({
 basemap: "gray-vector",
 // layers : [mapLayer],
 }),
 // container: "viewDiv",
 container         : sceneViewRef.current,
 qualityProfile    : "high",
 spatialReference  : {
 wkid: 104971,
 },
 tilingSchemeLocked: true,
 camera            : {
 position: {
 x               : -112,
 y               : -25,
 z               : 1000000,
 spatialReference: 104971,
 },
 heading : 29,
 tilt    : 49,
 },
 zoom              : 7,
 center            : [-87, 34]
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
 console.log(sceneView);

 };
 }, [props, sceneView]);


 return (
 <div className = "h-full">
 <div className={sceneView}/>
 {/!*<MapsLayer sceneView = {sceneView}/>*!/}
 </div>
 );
 }

 */


const useStyles = makeStyles(() =>
	createStyles({
		container: {
			height:   '90vh',
			width:    '90vw',
			overflow: "hidden",
		},
		mapDiv:    {
			height: '100%',
			width:  '100%'
		},
	}));

const map = new WebMap({
	basemap: "streets-night-vector",
});

const view = new MapView({
	map:       map,
	container: "viewDiv",
	center:    [-118.244, 34.052],
	zoom:      5
});


export default function SelectedSceneView() {
	const classes = useStyles();


	return (
		<div className = {classes.container}>
			<div id = "viewDiv" className = {classes.mapDiv}/>
		</div>
	);
};
