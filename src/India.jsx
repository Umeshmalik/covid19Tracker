import React,{Component} from "react";
import { Typography,Grid } from '@material-ui/core';
import Cards from './comp/Card'
import logo from './img/covid19.jpeg';
import Tab from './comp/Table';
import { CircularProgress } from '@material-ui/core';
import Radium, {StyleRoot} from 'radium';
import { fadeIn} from 'react-animations'
import axios from "axios";

class India extends Component{
    constructor(props) {
        super(props)
        this.state = {
          lists: [],
          confirmed : 0,
          active : 0,
          recovered : 0,
          deaths : 0,
          lastupdatedtime : ''
        }
      }
      async componentDidMount() {
        const { data } = await axios.get('https://data.covid19india.org/v4/min/data.min.json');

      this.setState({lists : data.statewise})
      this.setState({
        confirmed : parseInt( data['TT']['total'].confirmed) ,
        deaths : parseInt(data['TT']['total'].deceased), 
        recovered : parseInt(data['TT']['total'].recovered), 
        lastupdatedtime : data['TT']['meta'].last_updated 
      })
      this.setState({
        active : parseInt(this.state.confirmed - this.state.deaths - this.state.recovered)
      })
      }

    render(){
        let style = {
          top:{
            overflowY: 'scroll',
            maxHeight:'85vh',
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
          },
            Container:{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                flexDirection : 'column',
            },
            header :{
                width : '80%',
                padding : 10, 
                textAlign : 'center',
                fontStyle : 'italic',
                fontFamily: "Times New Roman",
                display: 'inline-block'
              },
              grid:{
                  display : 'flex',
                  flexWrap : 'wrap',
                  justifyContent: 'center',
                  }
        }
        return(
          <StyleRoot>
            <div style={style.top}>
            <div style={style.Container}>
                <Typography className='badge badge-primary' variant='h4' color='primary' style={style.header}>
                    Covid-19 Cases in India
                </Typography>
                <Typography variant='h6'  color='primary' >Last Updated : {this.state.lastupdatedtime}</Typography>
                <img style={{width:100}} src={logo} alt="covid-logo"></img>  
                {
                  this.state.deaths ==='' &&(
                    <CircularProgress/>
                  )
                }
                {
              this.state.deaths !== '' &&(
                <div>
                { this.state.active !== 0 &&
                  <Grid style = {style.grid}>
                    <Cards
                      cardTitle = "Total Cases in India"
                      val = {this.state.confirmed}
                      desc = "Total number of Confirmed cases in India"
                      lastUpdate = {this.state.lastupdatedtime}
                      dis = {true}
                    />
                    <Cards
                      cardTitle = "Active Cases in India"
                      val = {this.state.active}
                      desc = "Total number of Active cases in India"
                      lastUpdate = {this.state.lastupdatedtime}
                      dis = {true}
                    />
                    <Cards 
                      cardTitle = "Recovered Cases in India"
                      val = {this.state.recovered}
                      desc = "Total number of Recovered Cases in India"
                      lastUpdate = {this.state.lastupdatedtime}
                      dis = {true}
                    />
                    <Cards 
                      cardTitle = "Deaths in India"
                      val = {this.state.deaths}
                      desc = "Total number of Deaths from Covid-19 in India"
                      lastUpdate = {this.state.lastupdatedtime}
                      dis = {true}
                    />
                </Grid>
                }
                <Tab />
              </div>
                  )}
            </div>
            </div>
        </StyleRoot>
    )}
}

export default India;