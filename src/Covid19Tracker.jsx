import React from 'react';
import App from './App';
import './App.css';
import { Button, Container } from '@material-ui/core';
import India from './India';
import { makeStyles } from '@material-ui/core';
import AboutUs from './comp/AboutUs';
import Home from './comp/Home';
import { useHistory,Route } from 'react-router-dom';
import Radium, {StyleRoot} from 'radium';
import { fadeIn} from 'react-animations';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { useState } from 'react';

const useStyles = makeStyles({
    root:{
        background: 'linear-gradient(40deg, #08bcf7 30%, #5e69a6 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        display:'flex',
        justifyContent:'space-between'

    },
    button :{
        background:'#64b764',
        marginInline:'15px',
    },
    div:{
        justifyContent:'flex-end',
        alignSelf:'center',
    },
    home:{
        justifyContent:'flex-start',
        alignSelf:'center'
    },
    fadeIn: {
        position:'absolute',
        bottom:'1%',
        marginLeft:'44%',

        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
      }
})

let Covid19Tracker = () =>{
    const history = useHistory();
    const [congo, setCongo] = useState(false);
    let showCovidTracker = () => history.push("World")

    let showCasesInIndia = () => history.push("India")
    
    // let showVaccineData = () => history.push('/Vaccine-Tracker')

    let showAboutUs = () => history.push('/AboutUs')

    let showHome = () => history.push('/')

    const {width, height} =useWindowSize();
    const poper = () =>{setCongo(!congo) }
    // console.log(history);

    const contain = useStyles()

    return(
        <div className="App">
            {
                congo &&(
                    <div>
                        <Confetti width={width-100} height={height} numberOfPieces={200} wind={-0.1} recycle={false}/>
                        <Confetti width={width} height={height} numberOfPieces={200} wind={0.1} recycle={false}/>
                        <Confetti width={width} height={height} numberOfPieces={300} wind={0} recycle={false}/>
                    </div>
                )
            }
            <Container className = {contain.root}>
                <div className = {contain.home}>
                    <Button id="Home" className= {contain.button} onClick ={showHome} >Home</Button>
                </div>
                <div className ={contain.div}>
                    <Button id="World" className= {contain.button} onClick={showCovidTracker}>Covid-19 Tracker</Button>
                    <Button id="India" className= {contain.button} onClick={showCasesInIndia}>Cases in India</Button>
                    {/* <Button id="Vaccine" className={contain.button} onClick={showVaccineData}>Vaccine Tracker</Button> */}
                    <Button id="AboutUs" className= {contain.button} onClick={showAboutUs}>About Us</Button>
                </div>
            </Container>
            <Route exact path='/World' component={App}></Route>
            <Route exact path='/India' component={India}></Route>
            <Route exact path='/AboutUs' component={AboutUs}></Route>
            <Route exact path='/' component={Home}></Route>
            <StyleRoot>
                <div  className={contain.fadeIn} onClick={poper}>
                    Made with <img alt ='emoji'src='https://codingclub.tech/static/icons/heart.gif' height='45px'/> 
                    in <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/flag-india_1f1ee-1f1f3.png" alt="indian flag" height='50px' title='india'/>  
                </div>
            </StyleRoot>
        </div>
    )
}

export default Covid19Tracker; 