import React, {useEffect, useState, useRef}                                                                           from "react";
import AppFrame                                                                                                       from "components/app/AppFrame";
import {Typography, Divider, Box, Card, CardMedia, CardContent, CardActions, CardActionArea, Button, Collapse, Modal} from "@material-ui/core";
/*Map Loading*/
import {LoadMap}                                                                                                      from "models/ArcMapLoader";
import useSetMapsQueryParams                                                                                          from "../store/useMapQueryParams";
/*Images*/
import OaklandALPR                                                                                                    from "images/ALPR_LB.jpg";
import CanBus                                                                                                         from "images/CANBUSData.png";
import ShodanCam                                                                                                      from "images/ShodanIoTCamLB(LT).jpg";
import Conflict                                                                                                       from "images/ConflictLB.jpg";
import Hawaii                                                                                                         from "images/Hawaii.png";
import Twitter                                                                                                        from "images/Twitter.png";
import ErrorIMG                                                                                                       from "images/BxBuWTQ.png";
/*Theme*/
import {Theme}                 from "@material-ui/core";
import themeState, {ThemeMode} from "store/themeState";
import {makeStyles, createStyles} from '@material-ui/styles';



const useStyles = makeStyles(createStyles({
	root            : {
		display       : 'flex',
		flexWrap      : 'wrap',
		width         : "100%",
		marginRight   : "5vw",
		justifyContent: "center",
		alignItems    : "center",
		overflow      : 'hidden',
		bgcolor       : 'background.paper',
	},
	expand          : {
		maxWidth: "calc(100% / 2)",

		// transform: 'rotate(180deg)',
	},
	avatar          : {
		backgroundColor: "black",
	},
	cardItem        : {
		width       : 300,
		height      : 395,
		marginBottom: "5vh",
		marginRight : "2vw",
		marginLeft  : "2vw",
		overflow    : 'hidden',
	},
	content         : {
		display : "flex-box",
		width   : 300,
		height  : 200,
		overflow: 'hidden',
	},
	actions         : {
		size  : 35,
		bottom: "100%"
	},
	actions_collapse: {
		padding: 0,
		margin : 0
	},
	icon            : {
		color    : 'rgba(255, 255, 255, 0.54)',
		'&:hover': {
			color  : 'primary.dark',
			opacity: [0.7, 0.8, 0.6],
		},
	},
	contain         : {
		width: "100vw"
	},
	sub_focus       : {
		color     : "#c3cf14",
		fontSize  : "15pt",
		fontWeight: "bolder",
	},
	modalStyle      : {
		position       : 'absolute',
		top            : "50%",
		left           : "50%",
		border         : '2px solid #000',
		backgroundColor: "#242222",
	},
}));



export default function FramesPage() {
	const classes = useStyles();

	const [showFrame, setShow]  = React.useState(false);
	const [openMod, setOpenMod] = React.useState(false);

	const [mapID, setMapID]   = React.useState<null | any>(null);
	const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);


	const handleOpen  = (id: string) => {
		setShow(true);
		setMapID(id);
	};
	const handleClose = () => {
		setShow(false);
		setMapID(null);
	};

	const handleOpenMod  = () => {
		setOpenMod(true);
	};
	const handleCloseMod = () => {
		setOpenMod(false);
	};

	const handleSelectionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setShow(!showFrame);
		setAnchor(event.currentTarget);
	};

	const TEST = (
		<div className = {classes.modalStyle}>
			<h2 id = "simple-modal-title">Text in a modal</h2>
			<p id = "simple-modal-description">
				Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
			</p>
		</div>
	);


	return (<AppFrame>
		<Typography variant = "h1" fontSize = {"4rem"} marginLeft = {5} marginBottom = {5}>GIS Data Frames</Typography>
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
							<Typography gutterBottom variant = "h5" component = "h2" className = {classes.sub_focus}>
								Oakland ALPR
							</Typography>
							<Typography variant = "body2" color = "textSecondary" component = "p">
								An example of the constant presence of passive surveillance technologies in the form of license plate readers.
								Used to demonstrate an avenue a individual can be tracked through the identification of their vehicle.
							</Typography>
						</CardContent>
					</CardActionArea>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button variant = "contained" color = "primary" onClick = {() => {
							handleOpen("01c7ddf5c8bd47cfaed0cd8e91976b88");
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
							<Typography gutterBottom variant = "h5" component = "h2" className = {classes.sub_focus}>
								Automotive Controller
							</Typography>
							<Typography variant = "body2" color = "textSecondary" component = "p">
								The points displayed on this map represent every stop of a single taxicab operating in Beijing.
								The GPS coordinates of the cab was acquired by a team of Beijing university researchers,
								through the process of penetrating the minimal security protecting the car’s CAN Bus.
							</Typography>
						</CardContent>
					</CardActionArea>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button variant = "contained" color = "primary" onClick = {() => {
							handleOpen("472e736fcd984cf6bd00e942e14a5b5d");
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
							<Typography gutterBottom variant = "h5" component = "h2" className = {classes.sub_focus}>
								Shodan: IP Camera Sracpe
							</Typography>
							<Typography variant = "body2" color = "textSecondary" component = "p">

							</Typography>
						</CardContent>
					</CardActionArea>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button variant = "contained" color = "primary" onClick = {() => {
							handleOpen("2a766a411bcb41d8b76f14ec038ffe20");
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
							<Typography gutterBottom variant = "h5" component = "h2" className = {classes.sub_focus}>
								Armenia—Azerbaijan Conflict
							</Typography>
							<Typography variant = "body2" color = "textSecondary" component = "p">
								Map displaying the locations of known deaths and injuries that occurred throughout the 2020 Armenia—Azerbaijan conflict,
								as reported by NGOs operating in country.
							</Typography>
						</CardContent>
					</CardActionArea>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button variant = "contained" color = "primary" onClick = {() => {
							handleOpen("d8e0e9d9acf1432b9cf7d4d3d41817c5");
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
							image = {Twitter}
							title = "test"
						/>
						<CardContent className = {classes.content}>
							<Typography gutterBottom variant = "h5" component = "h2" className = {classes.sub_focus}>
								Twitter Web Scraping
							</Typography>
							<Typography variant = "body2" color = "textSecondary" component = "p">
								Scraping twitter data using keywords referencing the Denver Protest shooting, October 10th.
							</Typography>
						</CardContent>
					</CardActionArea>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button variant = "contained" color = "primary" onClick = {() => {
							handleOpen("4ed76d16ebdd47a78b32954420fce152");
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
							image = {Hawaii}
							title = "test"
						/>
						<CardContent className = {classes.content}>
							<Typography gutterBottom variant = "h5" component = "h2" className = {classes.sub_focus}>
								Hawaii Island Lava Flow Risk
							</Typography>
							<Typography variant = "body2" color = "textSecondary" component = "p">
								The boundaries and classification of lava flow hazard zones on Hawaii Island were first mapped by the US Geological Survey in 1974.
								This classification scheme divides the island into 18 major zones that are ranked from 1 through 9 based on the probability of coverage by lava flows.
								The risk levels are based primarily on the location and frequency of historic
								eruptions (those for which there are written records or that are known from the oral traditions of the Hawaiians) and the geologic mapping and scientific dating of the old flows from prehistoric eruptions.
							</Typography>
						</CardContent>
					</CardActionArea>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button variant = "contained" color = "primary" onClick = {() => {
							handleOpen("573d77a382ae4d14856f0f2110be14af");
						}}>
							Show Frame
						</Button>
						<Button size = "small" color = "primary">Share</Button>
						<Button size = "small" color = "primary" onClick = {handleOpenMod}>Learn More</Button>
						<Modal
							open = {openMod}
							onClose = {handleCloseMod}
							aria-labelledby = "Hawaii-modal-title"
							aria-describedby = "Hawaii-modal-description"
						>
							{TEST}
						</Modal>
					</CardActions>
				</Card>
			</Box>
		</Collapse>
		<Modal
			open = {showFrame}
			onClose = {handleClose}
		>
			<LoadMap Id = {mapID}/>
		</Modal>
	</AppFrame>);
};
