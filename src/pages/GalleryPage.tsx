import React from "react";
import AppFrame from "components/app/AppFrame";
import {Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/styles";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles(() =>
	createStyles({
		root         : {
			display       : 'flex',
			flexWrap      : 'wrap',
			width         : "100%",
			marginBottom  : "5vh",
			justifyContent: "center",
			alignItems    : "center",
			overflow      : 'hidden',
			bgcolor       : 'background.paper',

		},
		imageList    : {
			width : "fit-content",
			height: "fit-content",
		},
		imageListItem: {
			width       : 300,
			height      : 480,
			marginBottom: "5vh",
			overflow    : 'hidden',
			bgcolor     : 'background.paper',
		},
		icon         : {
			color    : 'rgba(255, 255, 255, 0.54)',
			'&:hover': {
				color  : 'primary.dark',
				opacity: [0.7, 0.8, 0.6],
			},
		},
	}),
);

const itemData_Fall2020 = [
	{
		img  : "https://i.imgur.com/YaTwA9c.jpg",
		title: "Passive Surveillance: ALPR",
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/MTtA92m.jpg",
		title: 'Shodan',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/lKqbxas.jpg",
		title: 'Boulder County NLCD',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/hbUQvdG.jpg",
		title: 'Insecure IoT Devices (America)',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/1nI5xWH.jpg",
		title: 'Insecure IoT Devices (Exposed DOE IoT Device: Cheney Reservoir)',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/8sHTApp.jpg",
		title: 'Oklahoma Flammable Terrain (Gray Scale Heat Map)',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/blEizlz.jpg",
		title: 'Oklahoma Flammable Terrain (Color Scale Heat Map)',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "https://i.imgur.com/qocMtY4.jpeg",
		title: 'Twitter Trend Location Scrape (Oct.10, Dolloff)',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "",
		title: '',
		class: 'GEOG-3053: GIS: Mapping',
	},
	{
		img  : "",
		title: '',
		class: 'GEOG-3053: GIS: Mapping',
	},
];

const itemData_Spring2021 = [
	{
		img  : "https://storage.googleapis.com/afs-prod/media/media:3ac0b01cc35c4898842e8dd3d2a8621b/800.jpeg",
		title: "Azerbaijan Conflict",
		class: '',
	},
	{
		img  : "https://storage.googleapis.com/afs-prod/media/fed5bdae6df84a3aaccb86166396e328/1000.jpeg",
		title: 'Ukraine',
		class: '',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
];

const itemData_Fall2021 = [
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
];

/*
const itemData_ = [
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
	{
		img  : "#",
		title: '#',
		class: '#',
	},
];
*/


export default function GalleryPage() {
	const classes = useStyles();

	return (
		<AppFrame>
			<Typography variant = "h1" fontSize = {"4rem"} marginLeft = {5} marginBottom = {5}>Photos</Typography>
			{/*<Box sx = {{width: "100%", height: "100%", marginTop: "5vh", display: "flex", justifyContent: "center", alignItems: "center",}}>*/}
			<div className = {classes.root}>
				<ImageList rowHeight = {180} gap = {30} className = {classes.imageList}>
					<ImageListItem key = "Subheader1" cols = {4} style = {{height: 'auto'}}>
						<ListSubheader component = "div">Fall 2020</ListSubheader>
					</ImageListItem>
					{itemData_Fall2020.map((item) => (
						<ImageListItem key = {item.img} className = {classes.imageListItem}>
							<img src = {item.img} alt = {item.title}/>
							<ImageListItemBar
								title = {item.title}
								subtitle = {<span>course: {item.class}</span>}
								actionIcon = {
									<IconButton aria-label = {`info about ${item.title}`} className = {classes.icon}>
										<InfoIcon/>
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>

				<ImageList rowHeight = {180} gap = {30} className = {classes.imageList}>
					<ImageListItem key = "Subheader2" cols = {4} style = {{height: 'auto'}}>
						<ListSubheader component = "div">Spring 2021</ListSubheader>
					</ImageListItem>
					{itemData_Spring2021.map((item2) => (
						<ImageListItem key = {item2.img} className = {classes.imageListItem}>
							<img src = {item2.img} alt = {item2.title}/>
							<ImageListItemBar
								title = {item2.title}
								subtitle = {<span>course: {item2.class}</span>}
								actionIcon = {
									<IconButton aria-label = {`info about ${item2.title}`} className = {classes.icon}>
										<InfoIcon/>
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>

				<ImageList rowHeight = {180} gap = {30} className = {classes.imageList}>
					<ImageListItem key = "Subheader3" cols = {4} style = {{height: 'auto'}}>
						<ListSubheader component = "div">~l</ListSubheader>
					</ImageListItem>
					{itemData_Fall2021.map((item3) => (
						<ImageListItem key = {item3.img} className = {classes.imageListItem}>
							<img src = {item3.img} alt = {item3.title}/>
							<ImageListItemBar
								title = {item3.title}
								subtitle = {<span>course: {item3.class}</span>}
								actionIcon = {
									<IconButton aria-label = {`info about ${item3.title}`} className = {classes.icon}>
										<InfoIcon/>
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</div>
			{/*</Box>*/}
		</AppFrame>
	);
}
