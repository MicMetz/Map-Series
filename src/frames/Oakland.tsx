import {createStyles, makeStyles} from "@material-ui/styles";
import React, {useRef, useEffect} from "react";
import {loadModules}              from "esri-loader";
import {Chart, Doughnut, Bar}     from 'react-chartjs-2';


const useStyles = makeStyles(createStyles({
	root: {

	},
	sub_focus: {
        color: "#c3cf14",
        fontSize: "14pt",
        fontWeight: "bolder",
    },

}));

interface ArcProps {
	id: String,

}

export default function OaklandFrame() {
	const classes = useStyles();

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
		}).then(([MapView, WebMap, esriConfig, watchUtils, Legend, Expand, Compass, ScaleBar, Graphic]) => {
			esriConfig.portalUrl = "https://ucboulder.maps.arcgis.com"


			const webmap = new WebMap({
				portalItem: {
					id: "2a766a411bcb41d8b76f14ec038ffe20"
				}
			});

			const view = new MapView({
				map: webmap,
				container: mapElement.current
			})




		});

	});

	return(
		<div>
		</div>
	);
};
