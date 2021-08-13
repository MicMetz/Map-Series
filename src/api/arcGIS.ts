import {MapFrame} from "models/MapFrame";

export async function getFrame(): Promise<MapFrame> {
	const response = await fetch("", {
		method : "GET",
		headers: {"Content-Type": "application/json"},
	});

	const json = await response.json();

	return json;
}
