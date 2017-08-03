import React from "react";
import ReactDOM from "react-dom";
import ItemList from './ItemList.jsx';

class List extends React.Component{


    render(){
        return <div>
                <ItemList />
        </div>
    }
}

module.exports = List;