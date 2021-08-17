import React, {useRef, useEffect} from "react";
import {loadModules}              from "esri-loader";
import {render}                   from "react-dom";



export function LoadMap(props: any) {
	// create a ref to element to be used as the map's container
	const mapElement = useRef(null);

	useEffect(() => {
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
				map:       webmap,
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
	}, [props]);

	return <div style = {{height: "100%", width: "100%"}} ref = {mapElement}/>
}
