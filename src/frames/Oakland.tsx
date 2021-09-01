import {createStyles, makeStyles} from "@material-ui/styles";
import React, {useRef, useEffect} from "react";
import {loadModules}              from "esri-loader";
import {Chart, Doughnut, Bar}     from 'react-chartjs-2';


const useStyles = makeStyles(createStyles({
	root: {

	},
	sub_focus: {
        color: "#c3cf14",
        fontSize: "14pt",
        fontWeight: "bolder",
    },

}));

interface props {
	id: String,

}

export default function OaklandFrame() {

	return(
		<div>
		</div>
	);
};
