import React from "react";
import ReactDOM from "react-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import ApplicantName from './ApplicantName.jsx';
import ContactDesc from './ContactDesc.jsx';

class ItemList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activities: [],
        }
    }

    componentDidMount(){

        const url = `http://localhost:3000/activities?_sort=date&_order=asc`
        
        fetch( url )
            .then( r=>r.json())
            .then( response =>{
                this.setState({
                    activities: response,
                })
            })
    }
    render(){

        const rows = [...this.state.activities].map( activity =>{
            console.log(activity.id)
            return <Tr key={activity.id}>
                    <Td >{activity.date}</Td>
                    <ApplicantName userId={activity.userId}/>
                    <ContactDesc activity={activity}/>
            </Tr>
        })
        return <Table>
                <Thead>
                    <Tr>
                        <Th>Data</Th>
                        <Th>Name</Th>
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