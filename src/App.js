import { Component } from "react";
import {Box, Typography, withStyles } from '@material-ui/core'; 
import logo from './img/covid19.jpeg';
import Card from './comp/cards';
import { fetchData } from "./serv/api";
import Countries from './comp/Countries';
import BarChart from './comp/Chart';
import Radium, {StyleRoot} from 'radium';
import { fadeIn} from 'react-animations'

const style = {
  top:{
    overflowY: 'scroll',
    maxHeight:'85vh',
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  container:{
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center', 
    flexDirection : 'column'
  },
  header :{
    width : '93.5%',
    padding : 10, 
    textAlign : 'center',
    fontStyle : 'italic',
    fontFamily: "Times New Roman",
    display: 'inline-block'
  },
  grid:{
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center'
  }
  
}
class App extends Component{
  state = {
      data : {},
      country : ''
  }

handleCountryChange = async (country) =>{
    const fetchedData =await fetchData(country);
    this.setState({data : fetchedData, country : country  })
}

  async componentDidMount(){
    const fetchedData =await fetchData();
    this.setState({data : fetchedData})
  }
  render(){
    const { data } = this.state;
    return (
      <StyleRoot>
        <Box  className={this.props.classes.top}>
        <Box className={this.props.classes.container}>
          <Typography variant='h4' color='primary' className={this.props.classes.header}>
                Covid-19 CoronaVirus
          </Typography>
          <Typography variant='h6'  color='primary'>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toLocaleString()}</Typography>
          <img style={{width:100}} src={logo} alt="covid-logo"></img>  
          <Card className={this.props.classes.grid} data ={data}/> 
          <Countries handleCountryChange = {this.handleCountryChange}/>
          <BarChart data ={data}/>
          </Box>
        </Box>
      </StyleRoot>
    )
  }
}
export default withStyles(style)(App) ;