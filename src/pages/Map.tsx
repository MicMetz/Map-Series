import React     from "react";
import AppFrame  from "components/app/AppFrame";
import {LoadMap} from "models/ArcMapLoader"



interface MapId {
	id: string;
}


export default function Map(props: MapId) {
	return (
		<AppFrame>
			<LoadMap Id = {props.id}/>
		</AppFrame>
	);
};
