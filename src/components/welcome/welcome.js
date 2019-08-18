import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './welcome.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F9FA',
    
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
        <Container fixed>
      <div className= 'welbox'>
          <h1 className= 'welcome' >Welcome, I’m Winsam (win-some), 
            Nice to meet you</h1>
          <h2 className= 'welsub' >I’ve been in the design industry for about 5 years 
            working as an in-house designer and as well as a 
            freelancer. I enjoy designing user interfaces and as 
            well as information architecture for better user 
            experience. After designing several websites and 
            digital contents, my curiosity and passion for design 
            lead me to take a coding bootcamp. Now that I have 
            a better understanding of how things are built, I can 
            design better with coding in mind.   To be edited.</h2>
      </div>
      </Container>
    </div>
  );
}
