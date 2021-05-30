import { CircularProgress } from '@material-ui/core';
import Countup from 'react-countup';
import React from 'react'

export let Con = ({data:{confirmed}}) =>{
    if(!confirmed)
        return <CircularProgress/>
    let val = confirmed.value
    return(
        <span style={{color:'orange' ,textDecoration:'underline'}}>
            <Countup start = {0} end = {val} duration= {2} separator = ","/>
        </span>
    )
}

export let Dat = ({data:{lastUpdate}})=>{
    if(!lastUpdate)
        return <CircularProgress/>
    return(
        <span style={{color:"black", textDecoration:'underline'}}>
       {new Date(lastUpdate).toLocaleString()}
        </span>
    )
}

export let Death = ({data:{deaths}}) =>{
    if(!deaths)
        return <CircularProgress/>
    let val = deaths.value
    return(
        <span style={{color:'red', textDecoration:'underline',textDecorationStyle:'solid'}}>
            <Countup start = {0} end = {val} duration= {2} separator = ","/>
        </span>
    )
}