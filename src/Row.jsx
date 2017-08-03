import React from "react";
import ReactDOM from "react-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import ContactDesc from './ContactDesc.jsx';
import FiltrData from './FiltrData.jsx';
import ApplicantName from './ApplicantName.jsx';

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: [],
            userName: '',
        }
    }

    componentDidMount(){

        const id = this.props.activity.userId;
        const url = `http://localhost:3000/user/${id}`
        
        fetch( url )
            .then( r=>r.json())
            .then( response =>{
                this.setState({
                    user: response,
                    userName: response.name,
                })
            })
    }
    
    componentWillMount(){
        console.log(this.props.activity);
    }

    render(){   
            console.log(this.state.userName);

            if(this.state.userName.indexOf(this.props.searchedName) === -1){
                 return null;
            }

            return <Tr key={this.props.activity.id}>
                        <Td >{this.props.activity.date}</Td>
                        <ApplicantName user={this.state.user} />
                        <ContactDesc activity={this.props.activity}/>
            </Tr>
    }
}

module.exports = Row;