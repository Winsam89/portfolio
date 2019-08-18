import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AniHero from '../../assets/images/ani_hero.png'
import './hero.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
 
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <div className= 'container'>
          <h1 className= 'h1' >Visual Designer & Front-end Developer</h1>
          <h2 className= 'h2' >Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.</h2>
          <img alt='logo' className='aniHero' src={ AniHero } />

      </div>
    </div>
  );
}
