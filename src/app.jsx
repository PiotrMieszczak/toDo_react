import React from "react";
import ReactDOM from "react-dom";
import List from './List.jsx';

document.addEventListener("DOMContentLoaded", function(){
 

    class App extends React.Component{
        render(){ 
            return <List />                
        }           
   
    }

    ReactDOM.render(
    <App />, document.querySelector("#app")
    )

});