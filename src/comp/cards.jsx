import { Box, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";
import Card  from "./Card";

const useStyles = makeStyles({
    container : {
        color : 'green'
    },
    comp :{
        margin : '20px'
    },
    grid:{
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent: 'center'
    }
})

function Cards({data : {confirmed, recovered, deaths,lastUpdate}}) {
    const classes = useStyles();
    
    if(!confirmed)
        return <CircularProgress />; 
    return (
        <Box className={classes.comp}>
        <Typography className ={classes.container} variant = "h6" justify="center" align="center">CoronoVirus Cases Globally</Typography>
        <Grid className={classes.grid} container spacing = {3} justify = "center" align="center">
            <Card 
                cardTitle="Total Cases "
                val={confirmed.value}
                desc="Number of total Infected Cases "
                lastUpdate={lastUpdate}
                dis = {false}
            />
             <Card
                cardTitle="Active Cases "
                val = {confirmed.value - recovered.value - deaths.value}
                desc = " Number of total Active Cases"
                lastUpdate={lastUpdate}
                dis = {false}
            />
            <Card 
                cardTitle="Recovered Cases "
                val={recovered.value}
                desc="Number of total Recovered Cases "
                lastUpdate={lastUpdate}
                dis = {false}
            />
            <Card 
                cardTitle="Deaths Cases "
                val={deaths.value}
                desc="Number of Total Deaths "
                lastUpdate={lastUpdate}
                dis = {false}
            />
        </Grid>
        </Box>
    )
}
export default Cards;