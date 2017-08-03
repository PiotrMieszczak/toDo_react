import React from "react";
import ReactDOM from "react-dom";
import {Td } from 'react-super-responsive-table';


class ContactDesc extends React.Component{

    render(){
        return  <Td>{this.props.activity.desc}</Td>
    }
}

module.exports = ContactDesc;