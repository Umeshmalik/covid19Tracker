import React, { Component, createRef} from 'react';
import axios from 'axios';
import { territoryList } from './constants/TerritoryList';
import { get } from 'lodash';
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from '@material-ui/core';


class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            index: 0,

        }
        this.index = createRef();
    }

    async componentDidMount() {
        const {
            data
        } = await axios.get('https://data.covid19india.org/v4/min/data.min.json')
        // this.setState({lists : data})
        this.index.current = 0;
        Object.entries(data).map(([key, value]) => {
            if (key === 'TT');
            else {
                key = territoryList[territoryList.findIndex(values => values.codeName === key)]
                const name = get(key, 'name')
                this.setState({
                    lists: [
                        ...this.state.lists,
                        {
                            id: this.index.current++ + 1,
                            territory: name,
                            confirmed: parseInt(value['total'].confirmed),
                            active: parseInt(value['total'].confirmed - value['total'].deceased - value['total'].recovered),
                            deceased: parseInt(value['total'].deceased),
                            recovered: parseInt(value['total'].recovered)
                        }
                    ]
                })
            }
            return null;
        })
    }

    handeler(val) {
        console.log(val)
    }

    render() {
        let style = {
            main: {
                display: 'flex',
                justifyContent: 'center',
                padding: '4%',
                height: 1000,
                width: "100%"
            },
            table: {
                minWidth: 350,
            },
            tableHead: {
                background: '#9eeeee'
            }
        }

        const columns = [{
                field: "id",
                headerName: "ID",
                width: 100
            },
            {
                field: "territory",
                headerName: "Territory",
                editable: false,
                width: 200
            },
            {
                field: "confirmed",
                headerName: "Confirmed",
                type: "number",
                editable: false,
                width: 150
            },
            {
                field: "active",
                headerName: "Active",
                type: "number",
                editable: false,
                width: 150
            },
            {
                field: "deceased",
                headerName: 'Deceased',
                type: 'number',
                editable: false,
                width: 150
            },
            {
                field: 'recovered',
                headerName: 'Recovered',
                type: 'number',
                editable: false,
                width: 150

            }
        ];

        return (

            <> 
            {
                this.state.lists.length === 0 && <CircularProgress/>
            }
            {
                this.state.lists.length !== 0 && <div style = {style.main}>
                <DataGrid
                rows = { this.state.lists}
                columns = { columns }
                onCellClick = { this.handler }
                /> </div>
            } </>
        )
    }
}

export default Tab;