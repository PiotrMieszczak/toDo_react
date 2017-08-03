import React from "react";
import ReactDOM from "react-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Row from './Row.jsx';
class ItemList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activities: [],
            searchedName: '',
        }
    }

    componentDidMount(){
        const url = `http://localhost:3000/activities?_sort=date&_order=desc`
        fetch( url )
            .then( r=>r.json())
            .then( response =>{
                this.setState({
                    activities: response,
                })
            })
    }

    handleEnterPressed = (event) => {
        if (event.key == "Enter") {
            this.setState({
                searchedName: event.target.value,
            })
        }
    }
    handleonChange = (event) => {
            this.setState({
                searchedName: event.target.value,
            })
    }

    render(){
        console.log(this.state.searchedName)
        const rows = [...this.state.activities].map( activity =>{
            return <Row key={activity.id} searchedName={this.state.searchedName} activity={activity} ></Row>
        })
        return <Table>
                <Thead>
                    <Tr>
                        <Th>Data</Th>
                        <Th>Name
                        <input onChange={this.handleSearch} onKeyPress={this.handleEnterPressed} type="text"></input></Th>
                        <Th>Desc</Th>
                    </Tr>
                </Thead>
                <Tbody>
                        {rows}
                </Tbody>
        </Table>
    }
}

module.exports = ItemList;