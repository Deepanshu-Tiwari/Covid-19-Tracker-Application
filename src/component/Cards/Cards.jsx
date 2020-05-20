import React from "react";
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from "./Cards.module.css";
import CountUp from 'react-countup';
import cx from 'classnames';
import ContentLoader, { Facebook } from 'react-content-loader'


const Cards= ({covidData:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        // return 'Loading.....';
        return(
            <div>
                <ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                speed={0.5}
                backgroundColor="gray">
                <circle cx="150" cy="150" r="8" />
                <circle cx="194" cy="150" r="8" />
                <circle cx="238" cy="150" r="8" />
                </ContentLoader>

            </div>
        )
    }
    
    return(
        <div className='container' style={{marginTop:"50px", marginBottom:"50px", marginLeft:"0px",marginRight:"0px"}}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card} xm={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography> 
                        <Typography variant="h5" style={{color:"red"}}>
                            <CountUp  start={0} end={confirmed.value} duration={2.5} saperator= ',' />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  varient="body2">Number of Active Cases of Covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xm={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography> 
                        <Typography variant="h5" style={{color:"green"}}><CountUp  start={0} end={recovered.value} duration={2.5} saperator= ',' /> </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  varient="body2">Number of Recoveries from Covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xm={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography> 
                        <Typography variant="h5" style={{color:"red"}}><CountUp  start={0} end={deaths.value} duration={2.5} saperator= ',' /></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  varient="body2">Number of Death Caused by Covid19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;