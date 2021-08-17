import React     from "react";
import AppFrame  from "components/app/AppFrame";
import {LoadMap} from "../models/ArcMapLoader";

export default function TestPage() {
	return (
		<AppFrame>
			<LoadMap Id="01c7ddf5c8bd47cfaed0cd8e91976b88"/>
		</AppFrame>
	);
};
