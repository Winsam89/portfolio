import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Design from '../../assets/images/design.png'
import Dev from '../../assets/images/dev.png'

import './tools.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
        <Container fixed>
            <div className= 'bg'>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <div className= 'leftBox'>
                    <img alt='logo' className='col1' src={ Design } />                    <div className= 'devdes'>FRONT-END <br /> DEVELOPER</div>
                    <div className= 'tools'>DEV TOOLS</div>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REACT JS</li>
                        <li>NODE JS</li>
                        <li>Material UI</li>
                        <li>Bootstrap</li>
                        <li>Visual Studio Code</li>
                    </ul>
                    </div>
                </Grid>
                <Grid item xs={6}>
                <div className= 'rightBox'>
                <img alt='logo' className='col2' src={ Dev } />   
                    <div className= 'devdes'>VISUAL <br /> DESIGNER</div>
                    <div className= 'tools'>DESIGN TOOLS</div>
                    <ul>
                        <li>Adobe CC 2019</li>
                        <li>Adobe XD</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>After Effects</li>
                        <li>Premiere</li>
                    </ul>
                    </div>
                </Grid>
            </Grid>
            </div>
      </Container>
    </div>
  );
}
