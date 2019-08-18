import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hci from '../../assets/images/hci.png'
import Button from '@material-ui/core/Button';
import './portfolio.css'
import './media.css'
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    width: 136,
    backgroundColor: '#1C9EBC',
    color: 'white',
    fontWeight: 100,
    boxShadow: 'none',
    paddingLeft: 'auto',
    paddingRight: 'auto',
  }
 
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <div className= 'port-container'>
         <h1 className= 'portfolio-header' >PORTFOLIO</h1>

      
         <MediaQuery query="(min-device-width: 1224px)">
         <Container fixed className= { classes.navContainer }>
         <Grid container  spacing={2}>
            <Grid item xs={4}>
                <div className= 'port-bg'>
                <img alt='logo' className='project-image' src={ Hci } />          
                <h2 className='project-name'>PROJECT NAME</h2>
                <h4 className='project-sub' >Design + Development</h4>
                <Button variant="contained" className={classes.button}>VIEW
                </Button>
                </div>
                </Grid>        

                <Grid item xs={4}>
                <div className= 'port-bg'>
                <img alt='logo' className='project-image' src={ Hci } />          
                <h2 className='project-name'>PROJECT NAME</h2>
                <h4 className='project-sub' >Design + Development</h4>
                <Button variant="contained" className={classes.button}>VIEW
                </Button>
                </div>      
                </Grid>        

                <Grid item xs={4}>
                <div className= 'port-bg'>
                <img alt='logo' className='project-image' src={ Hci } />          
                <h2 className='project-name'>PROJECT NAME</h2>
                <h4 className='project-sub' >Design + Development</h4>
                <Button variant="contained" className={classes.button}>VIEW
                </Button>
                </div>     
            </Grid>   
            </Grid>  
            </Container>

            </MediaQuery>


         <MediaQuery query="(max-device-width: 1024px)">
                <div className= 'port-bg'>
                <img alt='logo' className='project-image' src={ Hci } />          
                <h2 className='project-name'>PROJECT NAME</h2>
                <h4 className='project-sub' >Design + Development</h4>
                <Button variant="contained" className={classes.button}>VIEW
                </Button>
                </div>

                <div className= 'port-bg'>
                <img alt='logo' className='project-image' src={ Hci } />          
                <h2 className='project-name'>PROJECT NAME</h2>
                <h4 className='project-sub' >Design + Development</h4>
                <Button variant="contained" className={classes.button}>VIEW
                </Button>
                </div>      

                <div className= 'port-bg'>
                <img alt='logo' className='project-image' src={ Hci } />          
                <h2 className='project-name'>PROJECT NAME</h2>
                <h4 className='project-sub' >Design + Development</h4>
                <Button variant="contained" className={classes.button}>VIEW
                </Button>
                </div>     
            </MediaQuery>



      </div>      
    </div>
  );
}




