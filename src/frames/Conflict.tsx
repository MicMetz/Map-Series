import {createStyles, makeStyles} from "@material-ui/styles";
import React                      from 'react'
import {useRef, useEffect}        from "react";
import {loadModules}              from "esri-loader";



const useStyles = makeStyles(createStyles({
	root     : {},
	sub_focus: {
		color     : "#c3cf14",
		fontSize  : "14pt",
		fontWeight: "bolder",
	},

}));


export default function LoadMapConflict() {
	const classes = useStyles();

	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);
	const mapInset   = useRef(null);


	useEffect(() => {
		// define the view here so it can be referenced in the clean up function
		let view: { destroy: () => void; } | null;

		loadModules([
			"esri/views/MapView", "esri/views/SceneView",
			"esri/config", "esri/widgets/Compass",
			"esri/widgets/ScaleBar", "esri/widgets/Legend",
			"esri/views/WebScene", "esri/widgets/Expand",
		], {
			css: true
		}).then(([MapView, WebScene, SceneView, esriConfig, Compass, ScaleBar, Legend, Expand]) => {
			esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com"


			const webscene = new WebScene({
				portalItem: {
					id: "5f0a4edc599c4b6cbf146884818b03a7"
				}
			});

			const overviewMap = new WebScene({
				basemap: "streets-vector"
			});

			const view = new SceneView({
				map      : WebScene,
				container: mapElement.current,
				constraints: {
					rotationEnabled: false,
				}
			});
			view.ui.components = [];

			const insetView         = new MapView({
				container  : mapInset.current,
				center     : [-122.30, 37.80],
				zoom       : 5,
				map        : overviewMap,
				constraints: {
					rotationEnabled: false
				}
			});
			insetView.ui.components = [];

			const scale = new ScaleBar({
				view    : view,
				unit    : "dual",
			});

			const compass = new Compass({
				view    : view,
			});

			const legendExpand = new Expand({
				view   : view,
				content: new Legend({
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

			// view.ui.add("overviewDiv", {position: "bottom-right"});
			view.ui.add(titleExpand, "top-right");
			view.ui.add(compass, {position: "top-left"});
			view.ui.add(scale, {position: "bottom-right"});
			view.ui.add(insetView);
			view.ui.add(legendExpand, "bottom-left");

			view.watch("widthBreakpoint", function (newValue: String) {
				titleExpand.expanded  = newValue !== "xsmall";
				legendExpand.expanded = newValue !== "xsmall";
			});




		});

	});

	return (
		<div style = {{
			height: "100%",
			width : "100%"
		}} ref = {mapElement}
		>
		</div>
	)
}
