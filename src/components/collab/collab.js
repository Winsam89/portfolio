import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Collab from '../../assets/images/collab.png'
import './collab.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    width: 136,
    borderColor: 'white',
    borderWidth: 1,
    fontWeight: 100,
    backgroundColor: 'none',
    color: 'white',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  }

}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <div className= 'collab-container'>
      <div class="speech-bubble-ds">
         <h1 className= 'collab-header'> Interested in collaborating? </h1>
         <p className= 'collab-sub-copy'> I’m open to discussing product design 
            and partnership opportunities </p>
            <Button variant="outlined" className={classes.button} >VIEW
                </Button>
            <div class="speech-bubble-ds-arrow"></div>
        </div>
        <div className='icon-container'>
        <img alt='logo' className='collab-icon' src={ Collab } />
        </div>
      </div>
    </div>
  );
}
