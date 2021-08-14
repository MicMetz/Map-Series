import React from "react";
import AppFrame from "components/app/AppFrame";
import {Theme} from '@material-ui/core/styles';
import {makeStyles, createStyles} from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

import {Typography, Box, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Button} from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import {red} from '@material-ui/core/colors';


import WebMap from "@arcgis/core/WebMap";
import {load, project} from "@arcgis/core/geometry/projection";
import MapView from "@arcgis/core/views/MapView";
import Search from "esri/widgets/Search";


const useStyles = makeStyles((/*theme: Theme*/) =>
	createStyles({
		root      : {
			display       : 'flex',
			flexWrap      : 'wrap',
			width         : "100%",
			marginBottom  : "5vh",
			justifyContent: "center",
			alignItems    : "center",
			overflow      : 'hidden',
			bgcolor       : 'background.paper',
		},
		expand    : {
			float     : "right",
			transform : 'rotate(0deg)',
			marginLeft: 'auto',
			/*transition: theme.transitions.create('transform', {
			 duration: theme.transitions.duration.shortest,
			 }),*/
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar    : {
			backgroundColor: "black",
		},
		cardItem  : {
			width       : 300,
			height      : 380,
			marginBottom: "5vh",
			marginRight : "2vw",
			marginLeft  : "2vw",
			overflow    : 'hidden',
		},
		content   : {
			width   : 300,
			height  : 200,
			overflow: 'hidden',
		},
		actions   : {
			height: 40,
			bottom: "100%"
		},
		icon      : {
			color    : 'rgba(255, 255, 255, 0.54)',
			'&:hover': {
				color  : 'primary.dark',
				opacity: [0.7, 0.8, 0.6],
			},
		},

	}),
);


interface MapProps {
	id: string,
	title: string,
	details: string,
}


export default function FramesPage() {
	const classes                 = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const webmap = new WebMap({
		portalItem: {
			id: "5f0a4edc599c4b6cbf146884818b03a7"
		}
	});

	const view = new MapView({
		map: webmap
	});


	return (
		<AppFrame>
			<Typography variant = "h1" fontSize = {"4rem"} marginLeft = {5} marginBottom = {5}>GIS Map Frames</Typography>
			<Box className = {classes.root}>

				<Card className = {classes.cardItem}>
					<CardActionArea>
						<CardMedia
							component = "img"
							alt = ""
							height = "140"
							image = "https://i.imgur.com/BxBuWTQ.png"
							title = "test"
						/>
					</CardActionArea>
					<CardContent className = {classes.content}>
						<Typography gutterBottom variant = "h5" component = "h2">
							TEST
						</Typography>
						<Typography variant = "body2" color = "textSecondary" component = "p">
							TEST
							<IconButton
								className = {clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick = {handleExpandClick}
								aria-expanded = {expanded}
								aria-label = "show more"
							>
								<ExpandMoreIcon/>
							</IconButton>
						</Typography>
					</CardContent>
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
					</CardActionArea>
					<CardContent className = {classes.content}>
						<Typography gutterBottom variant = "h5" component = "h2">
							TEST
						</Typography>
						<Typography variant = "body2" color = "textSecondary" component = "p">
							TEST
							<IconButton
								className = {clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick = {handleExpandClick}
								aria-expanded = {expanded}
								aria-label = "show more"
							>
								<ExpandMoreIcon/>
							</IconButton>
						</Typography>
					</CardContent>
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
					</CardActionArea>
					<CardContent className = {classes.content}>
						<Typography gutterBottom variant = "h5" component = "h2">
							TEST
						</Typography>
						<Typography variant = "body2" color = "textSecondary" component = "p">
							TEST
							<IconButton
								className = {clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick = {handleExpandClick}
								aria-expanded = {expanded}
								aria-label = "show more"
							>
								<ExpandMoreIcon/>
							</IconButton>
						</Typography>
					</CardContent>
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
					</CardActionArea>
					<CardContent className = {classes.content}>
						<Typography gutterBottom variant = "h5" component = "h2">
							TEST
						</Typography>
						<Typography variant = "body2" color = "textSecondary" component = "p">
							TEST
							<IconButton
								className = {clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick = {handleExpandClick}
								aria-expanded = {expanded}
								aria-label = "show more"
							>
								<ExpandMoreIcon/>
							</IconButton>
						</Typography>
					</CardContent>
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
					</CardActionArea>
					<CardContent className = {classes.content}>
						<Typography gutterBottom variant = "h5" component = "h2">
							TEST
						</Typography>
						<Typography variant = "body2" color = "textSecondary" component = "p">
							TEST
							<IconButton
								className = {clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick = {handleExpandClick}
								aria-expanded = {expanded}
								aria-label = "show more"
							>
								<ExpandMoreIcon/>
							</IconButton>
						</Typography>
					</CardContent>
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
					</CardActionArea>
					<CardContent className = {classes.content}>
						<Typography gutterBottom variant = "h5" component = "h2">
							TEST
						</Typography>
						<Typography variant = "body2" color = "textSecondary" component = "p">
							TEST
							<IconButton
								className = {clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick = {handleExpandClick}
								aria-expanded = {expanded}
								aria-label = "show more"
							>
								<ExpandMoreIcon/>
							</IconButton>
						</Typography>
					</CardContent>
					<Divider variant = "middle"/>
					<CardActions disableSpacing className = {classes.actions}>
						<Button size = "small" color = "primary">Share</Button>
						<Button size = "small" color = "primary">Learn More</Button>
					</CardActions>
				</Card>

			</Box>
		</AppFrame>
	);
}
