import React           from "react";
import AppFrame        from "components/app/AppFrame";
import {LoadMapCamera} from "../frames/CameraScrape";



export default function TestPage() {
	return (
		<AppFrame>
			<LoadMapCamera />
		</AppFrame>
	);
};
