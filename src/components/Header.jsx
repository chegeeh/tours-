import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
  root : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '100vh',
    fontFamily : 'Nunito'
  },
  appBar : {
    background : 'none',
    fontFamily : 'Nunito'
  },
  appBarTitle : {
    flexGrow : '1'
  },
  appBarWrapper : {
    width : '80%',
    margin : '0 auto',
  },
  icon : {
    color : 'white',
    fontSize : '2rem'
  },
  coloredtext : {
    color : 'green'
  },
  title : {
    color : 'white',
    fontSize : '4.5rem'
  },
  godown : {
    color : 'white',
    fontsize : '4.5rem'
  },
  container: {
    textAlign: 'center',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '100vh',
    fontFamily : 'Nunito'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} elevation = {0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className = {classes.appBarTitle}>My<span className={classes.coloredtext}>Island</span></h1>        
          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <collapse>
        <div className={classes.container}>
          <h1 className= {classes.title}>Welcome to <br/>
            My<span className={classes.coloredtext}>Island</span>
          <br />
          <IconButton>
            <ArrowDownwardIcon className={classes.godown}/>
          </IconButton>
          </h1>
        </div>
      </collapse>
    </div>
  );
}