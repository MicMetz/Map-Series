import React from "react";
import AppFrame from "components/app/AppFrame";
import {Typography} from "@material-ui/core";

export default function TestPage() {
	return (
		<AppFrame>
			<Typography variant = "h1" fontSize = {"4rem"} marginLeft = {5} marginBottom = {5}>TEST PAGE</Typography>

		</AppFrame>
	);
};
