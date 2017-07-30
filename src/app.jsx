import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", function(){
 

    

    class App extends React.Component{
        render(){ 
            return <div>    
                        <TodoList />
                </div>                   
        }           
   
    }

    ReactDOM.render(
    <App />, document.querySelector("#app")
    )

});