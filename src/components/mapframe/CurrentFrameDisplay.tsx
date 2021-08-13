import {Box, CircularProgress, Paper, Typography} from "@material-ui/core";
import * as React from "react";
import {useRecoilValue} from "recoil";
import {currentFrameState} from "store/currentFrame";


interface Props {}

export function CurrentFrameDisplay(props: Props) {
	const {}           = props;
	const currentFrame = useRecoilValue(currentFrameState);

	return (
		<Paper
			sx = {{
				width: 700,
			}}
		>
			<React.Suspense
				fallback = {
					<Box
						width = "100%"
						display = "flex"
						justifyContent = "center"
						alignItems = "center"
					>
						<CircularProgress/>
					</Box>
				}
			>
				<Box padding = {2}>
					<Typography>{currentFrame.value}</Typography>
				</Box>
			</React.Suspense>
		</Paper>
	);
}
