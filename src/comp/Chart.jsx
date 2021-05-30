import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import HorizontalBar from 'react-chartjs-2';

const useStyle = makeStyles({
    container : {
        width :'70%',
        display : 'flex',
        alignItems : "center",
        marginTop : '20px'
    }
})

const BarChart = ({data :{confirmed, recovered, deaths }}) =>{
    const classes = useStyle();
    return (
        <Box  className ={classes.container}>
        {confirmed ? (
        <HorizontalBar type = 'bar'
            data = {{
        labels: ['Infected','Active', 'Recovered', 'Deaths'],
        datasets: [{
            label: 'Person',
            data: [confirmed.value,confirmed.value - recovered.value - deaths.value, recovered.value, deaths.value],
            backgroundColor: [
                'rgba(247, 202, 24, 1)',
                'rgba(242, 120, 75, 1)',
                'rgba(0, 230, 64, 1)',
                'rgba(207, 0, 15, 1)',
            ],
        }]
    }}
    options = {{
       legend : {display : false},
       title :{ display : true, text : 'Current State of Country'}
    }}
        />)
        : ''}
        </Box>
    )
}

export default BarChart;