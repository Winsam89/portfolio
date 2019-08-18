import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
 
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <div className= 'footer-container'>
      </div>
    </div>
  );
}
