import {useState, useEffect} from "react";
import {loadModules} from "esri-loader";


export default function MapsLayer(props: { sceneView: { map: { add: (arg0: any) => void; }; }; featureLayerProperties: { url: any; }; }) {
	const [, setLayer] = useState(null);

	useEffect(() => {
		if (props.sceneView) {
			loadModules(["esri/layers/FeatureLayer"]).then(([FeatureLayer]) => {
				const mapsLayer = new FeatureLayer({
					url: props.featureLayerProperties.url
				});

				setLayer(mapsLayer);

				if (props.sceneView?.map) {
					props.sceneView.map.add(mapsLayer);
				}
			}).catch((error) => console.error(error));
		}
	}, [props.sceneView]);

	return null;
}
