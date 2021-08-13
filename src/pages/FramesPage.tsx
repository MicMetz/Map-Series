import {Box, Divider, Typography} from "@material-ui/core";
import AppFrame from "components/app/AppFrame";
import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import themeState, {ThemeMode} from "../store/themeState"
import {CurrentFrameContainer} from "components/mapframe/CurrentFrameContainer"


function FramesPage() {
	return (
		<AppFrame>
			<Typography variant = "h1" fontSize = {"4rem"} marginLeft={5}>Map Frames</Typography>
			<Box
				sx = {{
					width         : "100%",
					height        : "80%",
					marginTop     : "5vh",
					display       : "flex",
					justifyContent: "center",
					alignItems    : "center",
				}}
			>
				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'background.paper',
						'&:hover'  : {
							backgroundColor: 'secondary.dark',
							opacity        : [0.7, 0.8, 0.6],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'background.paper',
						'&:hover'  : {
							backgroundColor: 'secondary.dark',
							opacity        : [0.7, 0.8, 0.6],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'background.paper',
						'&:hover'  : {
							backgroundColor: 'secondary.dark',
							opacity        : [0.7, 0.8, 0.6],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>
			</Box>

			<Box
				sx = {{
					width         : "100%",
					height        : "50%",
					display       : "flex",
					justifyContent: "center",
					alignItems    : "center",
				}}
			>
				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'background.paper',
						'&:hover'  : {
							backgroundColor: 'secondary.dark',
							opacity        : [0.7, 0.8, 0.6],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'background.paper',
						'&:hover'  : {
							backgroundColor: 'secondary.dark',
							opacity        : [0.7, 0.8, 0.6],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'background.paper',
						'&:hover'  : {
							backgroundColor: 'secondary.dark',
							opacity        : [0.7, 0.8, 0.6],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>
			</Box>
		</AppFrame>
	);
}

export default FramesPage;
