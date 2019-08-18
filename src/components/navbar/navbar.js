import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../assets/images/Logo.png'
import Email from '../../assets/images/email.png'
import './navbar.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },
  navbar: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: '0',
  },
  button: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      marginLeft: 'auto',
      padding: '0',
  },
  navContainer: {
      padding: '0',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Container fixed className= { classes.navContainer }>
      <AppBar className={ classes.navbar } position="static">
        <Toolbar className={ classes.navbar } variant="dense">
          <img alt='logo' className='logo' src={ Logo } />
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        <img alt='logo' className='email' src={ Email } />
      </Button>
        </Toolbar>
      </AppBar>
      </Container>

    </div>
  );
}
