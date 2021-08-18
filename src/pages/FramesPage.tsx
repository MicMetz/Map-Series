import React, {useEffect, useState, useRef}                                                                                    from "react";
import AppFrame                                                                                                                from "components/app/AppFrame";
import {makeStyles, createStyles}                                                                                              from '@material-ui/styles';
import {Typography, Divider, Box, Card, CardMedia, CardContent, CardActions, CardActionArea, Button, Slide, Collapse, Popover} from "@material-ui/core";
import useSetMapsQueryParams                                                                                                   from "../store/useMapQueryParams";
import {LoadMap}                                                                                                               from "models/ArcMapLoader";
import OaklandALPR                                                                                                             from "images/OaklandALPR.png";
import CanBus                                                                                                                  from "images/CANBUSData.png";
import ShodanCam                                                                                                               from "images/ShodanIoTCamLB(LT).jpg";
import Conflict                                                                                                                from "images/ConflictLB.jpg";
import ErrorIMG                                                                                                                from "images/BxBuWTQ.png";



const useStyles = makeStyles(() => createStyles({
	root:                {
		display: 'flex', flexWrap: 'wrap', width: "100%", marginRight: "5vw",

		justifyContent: "center", alignItems: "center", overflow: 'hidden', bgcolor: 'background.paper',
	}, expand:           {
		maxWidth: "calc(100% / 2)",

		// transform: 'rotate(180deg)',
	}, avatar:           {
		backgroundColor: "black",
	}, cardItem:         {
		width: 300, height: 395, marginBottom: "5vh", marginRight: "2vw", marginLeft: "2vw", overflow: 'hidden',
	}, content:          {
		display: "flex-box", width: 300, height: 200, overflow: 'hidden',
	}, actions:          {
		size: 35, bottom: "100%"
	}, actions_collapse: {
		padding: 0, margin: 0
	}, icon:             {
		color: 'rgba(255, 255, 255, 0.54)', '&:hover': {
			color: 'primary.dark', opacity: [0.7, 0.8, 0.6],
		},
	}, contain:          {
		width: "100vw"
	}, form:             {}
}),);


export default function FramesPage() {
	const classes              = useStyles();
	const [showFrame, setShow] = React.useState(false);
	const [mapID, setMapID]    = React.useState<null | any>(null);
	const [anchor, setAnchor]  = React.useState<HTMLButtonElement | null>(null);

	const handleClose = () => {
		setAnchor(null);
	};

	const open = Boolean(anchor);

	const handleSelectionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setShow(!showFrame);
		setAnchor(event.currentTarget);
	};


	return (<AppFrame>
		<div>
			<Typography variant = "h1" fontSize = {"4rem"} marginLeft = {5} marginBottom = {5}>GIS Map Frames</Typography>
			<Collapse in = {!showFrame} className = {classes.actions_collapse}>
				<Box className = {classes.root}>
					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = {OaklandALPR}
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
							<Button variant = "contained" color = "primary" onClick = {(event) => {
								setMapID("01c7ddf5c8bd47cfaed0cd8e91976b88");
								handleSelectionClick(event);
							}}>
								Show Frame
							</Button>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					{/**/}

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = {CanBus}
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
							<Button variant = "contained" color = "primary" onClick = {(event) => {
								setMapID("01c7ddf5c8bd47cfaed0cd8e91976b88");
								handleSelectionClick(event);
							}}>
								Show Frame
							</Button>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					{/**/}

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = {ShodanCam}
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
							<Button variant = "contained" color = "primary" onClick = {(event) => {
								setMapID("01c7ddf5c8bd47cfaed0cd8e91976b88");
								handleSelectionClick(event);
							}}>
								Show Frame
							</Button>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					{/**/}

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = {Conflict}
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
							<Button variant = "contained" color = "primary" onClick = {(event) => {
								setMapID("01c7ddf5c8bd47cfaed0cd8e91976b88");
								handleSelectionClick(event);
							}}>
								Show Frame
							</Button>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					{/**/}

					<Card className = {classes.cardItem}>
						<CardActionArea>
							<CardMedia
								component = "img"
								alt = ""
								height = "140"
								image = {ErrorIMG}
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
							<Button variant = "contained" color = "primary" onClick = {(event) => {
								setMapID("01c7ddf5c8bd47cfaed0cd8e91976b88");
								handleSelectionClick(event);
							}}>
								Show Frame
							</Button>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>

					{/**/}

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
							<Button variant = "contained" color = "primary" onClick = {(event) => {
								setMapID("01c7ddf5c8bd47cfaed0cd8e91976b88");
								handleSelectionClick(event);
							}}>
								Show Frame
							</Button>
							<Button size = "small" color = "primary">Share</Button>
							<Button size = "small" color = "primary">Learn More</Button>
						</CardActions>
					</Card>
				</Box>
			</Collapse>
		</div>
		<Popover anchorEl = {anchor} onClose = {handleClose} anchorOrigin = {{vertical: 'bottom', horizontal: 'center',}} transformOrigin = {{vertical: 'top', horizontal: 'center',}} open = {showFrame}>
			<LoadMap Id = {mapID}/>
		</Popover>
	</AppFrame>);
};
