import React,{Component}  from 'react';
import { Paper, TableContainer,Table, TableHead, TableRow,TableCell, TableBody} from '@material-ui/core';
import Countup from 'react-countup';


class Tab extends Component{
    constructor(props){
        super(props)
        this.state = {
            lists : [],
          }
    }

    async componentDidMount() {
        fetch("https://api.covid19india.org/data.json").then(
          res =>{
            res.json().then(
              data=>{
                this.setState({lists : data.statewise}) 
                // console.log(data);
            })
          })
      }

    render(){
    let style = {
        main:{
            display:'flex',
            justifyContent:'center',
            padding:'4%'
        },
        table :{
            minWidth:350,
        },
        tableHead :{
            background: '#9eeeee'
        }
    }  

    return(
        
        <div style={style.main}>
            
            <TableContainer component={Paper}>
                <Table style={style.table} aria-label="simple table">
                    <TableHead style={style.tableHead}>
                        <TableRow>
                            <TableCell align='center'>S.No.</TableCell>
                            <TableCell align='center'>States</TableCell>
                            <TableCell align='center'>Confirmed</TableCell>
                            <TableCell align='center'>Active</TableCell>
                            <TableCell align='center'>Recovered</TableCell>
                            <TableCell align='center'>Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody key="tableBody">
                    {
                        this.state.lists.map((ele, index)=>{
                        if(index === 0 || index === 31){
                            return(
                                <TableRow key ={index}></TableRow>
                            )
                        }
                        return(
                            <TableRow key={index}>
                                { index > 31 &&(
                                        <TableCell align='center'>{index-1}</TableCell>
                                    )
                                }
                                {
                                     index < 31 &&(
                                        <TableCell align='center'>{index}</TableCell>
                                    )
                                }
                                <TableCell align='center'>{ele.state}</TableCell>
                                <TableCell align='center'><Countup start = {0} end = {parseInt(ele.confirmed)} duration= {3} separator = ","/></TableCell>
                                <TableCell align='center'><Countup start = {0} end = {parseInt(ele.active)} duration= {3} separator = ","/></TableCell>
                                <TableCell align='center'><Countup start = {0} end = {parseInt(ele.recovered)} duration= {3} separator = ","/></TableCell>
                                <TableCell align='center'><Countup start = {0} end = {parseInt(ele.deaths)} duration= {3} separator = ","/></TableCell>
                            </TableRow>
                         )
                        })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
}

export default Tab;