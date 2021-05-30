import React, { Component } from 'react'
import CardComp from './Card'
import { CircularProgress } from '@material-ui/core';

export default class VaccineTracker extends Component {
    constructor(props){
        super(props)
        this.state = {
            tested:[]
        }
    }
    async componentDidMount() {
        await fetch("https://api.covid19india.org/data.json").then(
          res =>{
            res.json().then(
              data=>{
                //   console.log(data);
                this.setState({ tested:data.tested[data.tested.length-1]})
                // console.log(this.state.tested);
                  }
            )
          }
        )
      }
    render() {
        const style={
            main:{
                display:'flex',
                placeContent:'center'
            }
        }
        // console.log(typeof parseInt(this.state.tested.totalindividualsvaccinated));
        return (
            <div>
                {
              this.state.tested ==='' &&(
                <CircularProgress/>
              )
            }
            {
               this.state.tested !== '' &&(
                <div>
               <div style={style.main}>
                <CardComp 
                cardTitle='First Dose Administered'
                val={parseInt(this.state.tested.firstdoseadministered)}
                desc= {`Total Number of Doses Administered Upto ${this.state.tested.testedasof}`}
                lastUpdate={this.state.tested.testedasof}
                dis={true}
                />
                <CardComp 
                cardTitle='Second Dose Administered'
                val={parseInt(this.state.tested.seconddoseadministered)}
                desc= {`Total Number of Doses Administered Upto ${this.state.tested.testedasof}`}
                lastUpdate={this.state.tested.testedasof}
                dis={true}
                />
                <CardComp 
                cardTitle='Total Dose Administered'
                val={parseInt(this.state.tested.totaldosesadministered)}
                desc= {`Total Number of Doses Administered Upto ${this.state.tested.testedasof}`}
                lastUpdate={this.state.tested.testedasof}
                dis={true}
                />
            </div>
            <div style={style.main}>
                <CardComp 
                cardTitle='Total Individual vaccinated'
                val={parseInt(this.state.tested.totalindividualsvaccinated)}
                desc= {`Total Number of Doses Administered Upto ${this.state.tested.testedasof}`}
                lastUpdate={this.state.tested.testedasof}
                dis={true}
                />
            </div>
            </div>)}
            </div>
        )
    }
}
