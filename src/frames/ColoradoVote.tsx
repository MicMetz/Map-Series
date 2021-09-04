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


export default function LoadMapVote() {
	const classes = useStyles();

	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);
	const mapInset   = useRef(null);


	useEffect(() => {
		// define the view here so it can be referenced in the clean up function
		let view: { destroy: () => void; } | null;

		// @ts-ignore
		loadModules([
			"esri/views/MapView", "esri/WebMap",
			"esri/config", "esri/widgets/Compass", "esri/widgets/ScaleBar",
		], {
			css: true
		}).then(([MapView, WebMap, esriConfig, Compass, ScaleBar]) => {
			esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com"



			const webmap = new WebMap({
				portalItem: {
					id: "865e34f2e17f45d0a198382045bce411"
				}
			});

			const view = new MapView({
				map      : webmap,
				container: mapElement.current
			});

			const insetView = new MapView({
				map      : webmap,
				container: mapInset.current,
			});

			const scale = new ScaleBar({
				view: view,
				unit: "dual"
			});

			const compass = new Compass({
				view    : view,
				position: "top-left",
			});

			/*			const legend = new Legend({
			 view     : view,
			 container: document.createElement("div"),
			 type     : "card",
			 layout   : "auto"
			 });

			 view.ui.add(legend);*/
			view.ui.add(compass);
			view.ui.add(scale);
			view.ui.add(insetView);



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
