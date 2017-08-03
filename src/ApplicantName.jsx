import React from "react";
import ReactDOM from "react-dom";
import {Td } from 'react-super-responsive-table';


class ApplicantName extends React.Component{

    render(){
        return  <Td>{this.props.user.name}</Td>
    }
}

module.exports = ApplicantName;