import {Box, Typography} from "@material-ui/core";
import AppFrame from "components/app/AppFrame";
import {CurrentFrameContainer} from "../components/mapframe/CurrentFrameContainer";

function HomePage() {
	return (
		<AppFrame>
			<Typography variant = "h1" fontSize={"4rem"} marginLeft={5}>Home</Typography>
			<Box
				sx = {{
					width         : "100%",
					height        : "30vh",
					display       : "flex",
					justifyContent: "center",
					alignItems    : "center",
				}}
			>
			</Box>
		</AppFrame>
	);
}

export default HomePage;
