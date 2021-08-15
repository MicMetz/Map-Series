import React from "react";
import queryString from "query-string";

const relevantSceneEvents = ["drag", "mouse-wheel"];

export default function useSetMapsQueryParams(sceneView: any) {
	const [eventHandlers, setEventHandlers] = React.useState<any[]>([]);

	React.useEffect(() => {
		if (sceneView) {
			const eventHandlers = relevantSceneEvents.map((event) => {
				return sceneView.on(event, () => setMapsQueryParams(sceneView));
			});

			setEventHandlers(eventHandlers);
		}

		return () => {
			eventHandlers.forEach((eventHandler) => {
				eventHandler.remove();
			});
		};
	}, [eventHandlers, sceneView]);
}

function setMapsQueryParams(sceneView: any) {
	const mapsUrlParams = getMapsQueryParams(sceneView);
	window.history.replaceState(mapsUrlParams, document.title, '#' + queryString.stringify(mapsUrlParams));
}

function getMapsQueryParams(sceneView: any) {
	const {center, camera, zoom} = sceneView;
	const {longitude, latitude}  = center;
	const {heading, tilt}        = camera;

	return {
		longitude,
		latitude,
		zoom,
		heading,
		tilt,
	};
}
