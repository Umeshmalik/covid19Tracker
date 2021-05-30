import { Box, Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import Countup from 'react-countup';
    
const useStyles = makeStyles(
    {
        header :{
            background : 'lightBlue',
            padding : '10px'
        }
    }
)

const CardComp = ({cardTitle, val, desc, lastUpdate, dis}) =>{
    const style = useStyles();
    return (
        <Grid component={Card} style={{margin:30, borderBottom:'15px solid lightblue'}}>
            <Box className={style.header} >
            {
                <Typography variant = "h6" color ="textPrimary"> {cardTitle} </Typography>
            }
            </Box>
            <CardContent>   
                <Typography variant="h5">
                    <Countup start={0} end={val} duration={2.5} separator="," />
                </Typography>
                <Typography color='textSecondary'>
                    {desc}
                </Typography>
                <Typography>

                    {
                       dis !== true &&( new Date(lastUpdate).toLocaleString())
                    }
                    {
                        dis !== false && (lastUpdate)
                    }

                </Typography>      
            </CardContent>
        </Grid>
    );
}

export default CardComp;