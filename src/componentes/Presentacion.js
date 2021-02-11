import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth : 'none',
		position : 'relative',
		margin : 'auto',
		fontFamily :'Goudy Old Style'

	},
	carousel: {
		display : 'none'
	},
	slides: {
		width: "100%"
	},
	numSlide: {
		color: "#f2f2f2",
		fontSize: "12px",
		padding: "8px 12px",
		position: "absolute",
		top: "0"
	},
	text0: {
		color: '#000000',
		fontSize: '20px:',
		position: 'absolute',
		padding: '8px 12px',
		bottom: '8px',
		width: '100px',
		textAlign: 'center'
		
	},
	text: {
		display: 'none',
		textAlign: 'center',
		color: '#FFFFFF',
		padding: '8px 12px',
		bottom: '8px',
		[theme.breakpoints.up('sm')]: {
		  display: 'block',
		},
		fontFamily :'Goudy Old Style'
	}

}))

function Presentacion(){
	const classes = useStyles();

    return(
		<div className={classes.root}>
			<div className={classes.carousel}></div>
			<img className={classes.slides} src="images/top1.jpg" alt="" />
			<Typography variant="subtittle1" className={classes.text}>
            	Bienvenidos
          	</Typography>
		</div>
    )
}

export default Presentacion;