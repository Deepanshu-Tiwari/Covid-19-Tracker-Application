import React from "react";
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from "./Cards.module.css";
import CountUp from 'react-countup';

const Cards= ({covidData:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'Loading.....';
    }
    
    return(
        <div className='container'>
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography> 
                        <Typography variant="h5" >
                            <CountUp  start={0} end={confirmed.value} duration={2.5} saperator= ',' />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  varient="body2">Number of Active Cases of Covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography> 
                        <Typography variant="h5" ><CountUp  start={0} end={recovered.value} duration={2.5} saperator= ',' /> </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  varient="body2">Number of Recoveries from Covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography> 
                        <Typography variant="h5" ><CountUp  start={0} end={deaths.value} duration={2.5} saperator= ',' /></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  varient="body2">Number of Death Caused by Covid19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;