import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '/src/components/imageCard';
import places from '/src/places';
import windowpos from '/src/window';

const useStyles = makeStyles((theme) => ({
	root : {
		minheight : '100vh',
		alignItems : 'center',
		display : 'flex',
		justifyContents : 'center',

	},
}));

export default function Places(){
	const classes=useStyles();
	const checker = windowpos('Header');
	return (
		<div className={classes.root}>
			<ImageCard places={places[1]} checker={checker}/>
			<ImageCard places={places[0]} checker={checker}/>
		</div>
	)
}
