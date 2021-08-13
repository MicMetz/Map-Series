import {Box, Divider, Typography} from "@material-ui/core";
import AppFrame from "components/app/AppFrame";
import React from "react";
import {CurrentFrameContainer} from "components/mapframe/CurrentFrameContainer"


function FavoritesPage() {
	return (
		<AppFrame>
			<Typography variant = "h1" fontSize = {"4rem"}>Map Frames</Typography>
			<Box
				sx = {{
					width         : "100%",
					height        : "90%",
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
						bgcolor    : 'primary.dark',
						'&:hover'  : {
							backgroundColor: 'primary.main',
							opacity        : [0.9, 0.8, 0.7],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Divider/>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'primary.dark',
						'&:hover'  : {
							backgroundColor: 'primary.main',
							opacity        : [0.9, 0.8, 0.7],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Divider/>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'primary.dark',
						'&:hover'  : {
							backgroundColor: 'primary.main',
							opacity        : [0.9, 0.8, 0.7],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>
			</Box>

			<Box
				sx = {{
					width         : "100%",
					height        : "90%",
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
						bgcolor    : 'primary.dark',
						'&:hover'  : {
							backgroundColor: 'primary.main',
							opacity        : [0.9, 0.8, 0.7],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Divider/>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'primary.dark',
						'&:hover'  : {
							backgroundColor: 'primary.main',
							opacity        : [0.9, 0.8, 0.7],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>

				<Divider/>

				<Box
					sx = {{
						width      : 300,
						height     : 300,
						marginRight: 5,
						bgcolor    : 'primary.dark',
						'&:hover'  : {
							backgroundColor: 'primary.main',
							opacity        : [0.9, 0.8, 0.7],
						},
					}}
				>
					{/*<CurrentFrameContainer  id={""}/>*/}
				</Box>
			</Box>
		</AppFrame>
	);
}

export default FavoritesPage;
