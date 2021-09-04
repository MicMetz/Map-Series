import {createStyles, makeStyles}           from "@material-ui/styles";
import React, {Fragment, useRef, useEffect} from "react";
import {loadModules}                        from "esri-loader";
import LoadMapAutomotive                    from "./Automotive";
import LoadMapCamera                        from "./CameraScrape";
import LoadMapVote                          from "./ColoradoVote";
import LoadMapConflict                      from "./Conflict";
import LoadMapHawaii                        from "./Hawaii";
import LoadMapOakland                       from "./Oakland";
import LoadMapTwitter                       from "./Twitter";


// 8 Frames
const enum FrameKey {
	Camera   = "2a766a411bcb41d8b76f14ec038ffe20",
	ALPR     = "175ee55082e349caa4c747b88b5d0217",
	CANBUS   = "472e736fcd984cf6bd00e942e14a5b5d",
	CONFLICT = "d8e0e9d9acf1432b9cf7d4d3d41817c5",
	HAWAII   = "573d77a382ae4d14856f0f2110be14af",
	TWITTER  = "4ed76d16ebdd47a78b32954420fce152",
	VOTING   = "865e34f2e17f45d0a198382045bce411",
	WARDRIVE = "2ab4383ba06a401690c7ed54c50fc726"
}


interface ArcProps {
	Id: string;
}


const useStyles = makeStyles(createStyles({
	root    : {
		marginTop: 56,
		height   : "calc(100% - 56px)",
		width    : "100%"
	},
	panel   : {},
	subTitle: {},
	insetDiv: {
		position: "absolute",
		right   : "6px",
		width   : "200px",
		height  : "200px",
		border  : "1px solid black",
		overflow: "hidden",
	},
}));


export function LoadMap(props: ArcProps) {
	const classes = useStyles();

	const maplist = [
		{
			id  : 0,
			key : "null",
			mapp: <div/>
		},
		{
			id  : 1,
			key : "2a766a411bcb41d8b76f14ec038ffe20",
			mapp: <LoadMapCamera/>
		},
		{
			id  : 2,
			key : "01c7ddf5c8bd47cfaed0cd8e91976b88",
			mapp: <LoadMapOakland/>
		},
		{
			id  : 3,
			key : "472e736fcd984cf6bd00e942e14a5b5d",
			mapp: <LoadMapAutomotive/>
		},
		{
			id  : 4,
			key : "d8e0e9d9acf1432b9cf7d4d3d41817c5",
			mapp: <LoadMapConflict/>
		},
		{
			id  : 5,
			key : "573d77a382ae4d14856f0f2110be14af",
			mapp: <LoadMapHawaii/>
		},
		{
			id  : 6,
			key : "4ed76d16ebdd47a78b32954420fce152",
			mapp: <LoadMapTwitter/>
		},
		{
			id  : 7,
			key : "865e34f2e17f45d0a198382045bce411",
			mapp: <LoadMapVote/>
		}
	];

	/*function findFrame(props: { Id: string; }) {
	 let retmap = null;
	 if (maps.find(element => element.id == props.Id)) {
	 retmap = maps.find(element => element.id == props.Id).map;
	 }
	 return retmap;
	 };*/
	// const mapElement = useRef(null);
	let mapElement = null;
	// @ts-ignore
	mapElement     = maplist.find(mapEle => (mapEle.key === props.Id)).mapp;
	return (
		<div className = {classes.root}>
			<Fragment>
				<>{mapElement}</>
			</Fragment>
		</div>

	);
}
