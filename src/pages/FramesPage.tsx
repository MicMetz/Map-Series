import React, {useEffect, useState, useRef} from "react";
import AppFrame from "components/app/AppFrame";
import {Theme} from '@material-ui/core/styles';
import {makeStyles, createStyles} from '@material-ui/styles';
import {Typography, Divider, Box, Card, CardMedia, CardContent, CardActions, CardActionArea, Button, FormControlLabel, Switch, Slide, Collapse} from "@material-ui/core";
import SelectedSceneView from "components/mapframe/SelectedSceneView"
import useSetMapsQueryParams from "../store/useMapQueryParams";


const useStyles = makeStyles(() =>
	createStyles({
		root    : {
			display       : 'flex',
			flexWrap      : 'wrap',
			width         : "100%",
			justifyContent: "center",
			alignItems    : "center",
			overflow      : 'hidden',
			bgcolor       : 'background.paper',
		},
		expand  : {
			maxWidth: "calc(100% / 2)",

			// transform: 'rotate(180deg)',
		},
		avatar  : {
			backgroundColor: "black",
		},
		cardItem: {
			width       : 300,
			height      : 380,
			marginBottom: "5vh",
			marginRight : "2vw",
			marginLeft  : "2vw",
			overflow    : 'hidden',
		},
		content : {
			width   : 300,
			height  : 200,
			overflow: 'hidden',
		},
		actions : {
			height: 40,
			bottom: "100%"
		},
		icon    : {
			color    : 'rgba(255, 255, 255, 0.54)',
			'&:hover': {
				color  : 'primary.dark',
				opacity: [0.7, 0.8, 0.6],
			},
		},
		contain : {
			width: "100vw"
		},
		form : {
			position: 'fixed'
		}
	}),
);


export default function FramesPage() {
	const classes                      = useStyles();
	const [showFrame, setShow]         = React.useState(false);
	const [mapSceneView, setSceneView] = React.useState<null | any>(null);
	useSetMapsQueryParams(mapSceneView);

	const handleSelectionClick = () => {
		setShow(!showFrame);
	};


	return (
		<AppFrame>
			 {/* <Typography variant = "h1" fontSize = {"4rem"} marginLeft = {5} marginBottom = {5}>GIS Map Frames</Typography>
			<FormControlLabel control = {<Switch checked = {showFrame} onChange = {handleSelectionClick}/>} label = "Show Frame?" className={classes.form}/>
			<Slide direction = "up" in = {showFrame} mountOnEnter unmountOnExit>
				<Box className = {classes.root}>
					<SelectedSceneView/>
				</Box>
			</Slide>
			<Collapse in = {!showFrame} className = {classes.contain}>
				<Box className = {classes.root}>
					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia component = "img" alt = "" height = "140" image = "https://i.imgur.com/BxBuWTQ.png" title = "test"/>
							<CardContent className = {classes.content}>
								<Typography gutterBottom variant = "h5" component = "h2">
									TEST
								</Typography>
								<Typography variant = "body2" color = "textSecondary" component = "p">
									TEST
								</Typography>
							</CardContent>
						</CardActionArea>
						<Divider variant = "middle"/>
						<CardActions disableSpacing className = {classes.actions}>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = "https://i.imgur.com/BxBuWTQ.png"
								title = "test"
							/>
							<CardContent className = {classes.content}>
								<Typography gutterBottom variant = "h5" component = "h2">
									TEST
								</Typography>
								<Typography variant = "body2" color = "textSecondary" component = "p">
									TEST
								</Typography>
							</CardContent>
						</CardActionArea>
						<Divider variant = "middle"/>
						<CardActions disableSpacing className = {classes.actions}>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = "https://i.imgur.com/BxBuWTQ.png"
								title = "test"
							/>
							<CardContent className = {classes.content}>
								<Typography gutterBottom variant = "h5" component = "h2">
									TEST
								</Typography>
								<Typography variant = "body2" color = "textSecondary" component = "p">
									TEST
								</Typography>
							</CardContent>
						</CardActionArea>
						<Divider variant = "middle"/>
						<CardActions disableSpacing className = {classes.actions}>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = "https://i.imgur.com/BxBuWTQ.png"
								title = "test"
							/>
							<CardContent className = {classes.content}>
								<Typography gutterBottom variant = "h5" component = "h2">
									TEST
								</Typography>
								<Typography variant = "body2" color = "textSecondary" component = "p">
									TEST
								</Typography>
							</CardContent>
						</CardActionArea>
						<Divider variant = "middle"/>
						<CardActions disableSpacing className = {classes.actions}>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = "https://i.imgur.com/BxBuWTQ.png"
								title = "test"
							/>
							<CardContent className = {classes.content}>
								<Typography gutterBottom variant = "h5" component = "h2">
									TEST
								</Typography>
								<Typography variant = "body2" color = "textSecondary" component = "p">
									TEST
								</Typography>
							</CardContent>
						</CardActionArea>
						<Divider variant = "middle"/>
						<CardActions disableSpacing className = {classes.actions}>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = "https://i.imgur.com/BxBuWTQ.png"
								title = "test"
							/>
							<CardContent className = {classes.content}>
								<Typography gutterBottom variant = "h5" component = "h2">
									TEST
								</Typography>
								<Typography variant = "body2" color = "textSecondary" component = "p">
									TEST
								</Typography>
							</CardContent>
						</CardActionArea>
						<Divider variant = "middle"/>
						<CardActions disableSpacing className = {classes.actions}>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Collapse>*/}
			<Box className = {classes.root}>
				<SelectedSceneView/>
			</Box>
		</AppFrame>
	);
};
