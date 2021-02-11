import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor : '#00a196'
	},
	tool: {
		backgroundColor: '#00a196'
	},
	grow: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	  backgroundColor : '#00a196'
	},
	texto : {
		fontFamily :'Goudy Old Style',
		position : 'right'
	},
	title: {
	  display: 'none',
	  [theme.breakpoints.up('sm')]: {
		display: 'block',
	  },
	  fontFamily :'Goudy Old Style'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
		  marginLeft: theme.spacing(3),
		  width: 'auto',
		},
	  },
	  searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  inputRoot: {
		color: 'inherit',
		fontFamily :'Goudy Old Style',
	  },
	  inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
		  width: '20ch',
		},
	  }
	}));

export default function Header() {
  const classes = useStyles();

  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleClick = (event) => {
	  setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
	  setAnchorE1(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.tool}>
		  <IconButton edge="start" className={classes.menuButton} 
		   color="inherit" aria-label="menu" onClick={handleClick} >
            <MenuIcon />
          </IconButton>
		  <Menu
        id="simple-menu"
        anchorEl={anchorE1}
        keepMounted
        open={Boolean(anchorE1)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          <Typography variant="h5" className={classes.title}>
            THEOS
          </Typography>


          <div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon/>
			</div>
			<InputBase
			 placeholder="Buscar..."
			 classes={{
				 root: classes.inputRoot,
				 input: classes.inputInput,
			 }}
			/>
		  </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}