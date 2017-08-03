import React from "react";
import ReactDOM from "react-dom";
import {Td } from 'react-super-responsive-table';


class ApplicantName extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: []
        }
    }

    componentDidMount(){
        const id = this.props.userId;
        const url = `http://localhost:3000/user/${id}`
        
        fetch( url )
            .then( r=>r.json())
            .then( response =>{
                console.log(response)
                this.setState({
                    user: response,
                })
            })
    }

    render(){
        return  <Td key={this.state.user.id}>{this.state.user.name}</Td>
    }
}

module.exports = ApplicantName;