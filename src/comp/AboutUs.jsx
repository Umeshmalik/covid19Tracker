
import { Typography } from '@material-ui/core';
import { GrInstagram, GrLinkedin, GrGithub } from 'react-icons/gr';
import Radium, {StyleRoot} from 'radium';
import { rubberBand, flash} from 'react-animations'
import bg from '../img/img.jpg';



let AboutUs = ()=>{
    
    const style = {
        main:{
            display:'grid',
            justifyItems:'center',
            overflow:'hidden'
        },
        header:{
            fontFamily: 'Times New Roman',
            fontStyle : 'italic',
            display:'inline-block',
            overflowY: 'scroll',
            maxHeight:'90vh'
        },
        cards:{
            display:'flex',
            flexFlow:'column wrap',
            height:'40vh',
            placeContent:'center',
            animation: 'x 2.5s',
            animationName: Radium.keyframes(flash, 'flash'),
            color:"#1ca9e4"
        },
        footer:{
            position:'absolute',
            bottom: "14%",
            left:'45%'
        },
        fadeIn:{
            animation: 'x 2.5s',
            animationName: Radium.keyframes(rubberBand, 'rubberBand')
        },
        icon:{
            marginLeft:'10px',
            marginRight:'10px',
            fontSize:'25px'
        },
        bg:{
            zIndex:'-1',
            marginBottom:'-100%',
            inlineSize:'-webkit-fill-available'

        }
    }
    return(
        <div style={style.main}>
            <div style={style.bg}>
                <img src={bg} alt='backgroundImg' width="100%"/>
            </div>
            <Typography style={style.header} variant="h4" color='primary'>Covid-19 Tracking for World and India</Typography>
                <StyleRoot>
                    <div style={style.cards}>
                        <Typography variant="h5"><Typography variant='h5' style={{color:"coral"}}>Creator :</Typography><u> Umesh Malik</u></Typography>
                        <Typography variant='h5' style={{textDecoration:'underline'}}>MERN Stack Developer</Typography>
                    </div>
                    <div style={style.cards}>
                        <Typography variant="h5"> <Typography variant='h5' style={{color:"coral"}}>Technology used:</Typography> ReactJS</Typography>
                    </div>
                </StyleRoot>
            <footer style={style.footer}>
                <StyleRoot>
                    <div style={style.fadeIn}>
                        <a 
                            href="https://www.instagram.com/umesh__malik/" 
                            target="_blank" rel="noreferrer"><GrInstagram style={style.icon} /></a>
                        <a 
                            href="https://www.linkedin.com/in/umesh-malik-360632103/" 
                            target="_blank" rel="noreferrer"><GrLinkedin style={style.icon} /></a>
                        <a  
                            href="https://github.com/Umeshmalik" 
                            target="_blank" rel="noreferrer"><GrGithub style={style.icon} /></a>
                    </div>
                </StyleRoot>
            </footer>
        </div>
    )
}

export default AboutUs;