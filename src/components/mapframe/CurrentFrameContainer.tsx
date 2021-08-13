import {Box} from '@material-ui/core';
import * as React from "react";
import {CurrentFrameControls} from "./CurrentFrameControls";
import {CurrentFrameDisplay} from "./CurrentFrameDisplay";



export interface ArcProps {
	id: string
}

export function CurrentFrameContainer(props: ArcProps) {
	const {} = props;

	return (
		<Box sx = {{display: "flex", flexDirection: "column",}}>
			<CurrentFrameDisplay/>
			<Box marginTop = {1}>
				<CurrentFrameControls/>
			</Box>
		</Box>
	);
}
