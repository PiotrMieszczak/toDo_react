import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", function(){
 

    class TodoList extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    items: []
                }
        }
        
        fetchData(){
            const url = "http://localhost:3000/toDo"

            fetch(url)  
                .then( r=>r.json() )  //return data in json format
                .then( response =>{
                    let newItems = this.state.items.slice();
                    newItems.push(response);
                    console.log(response);
                    this.setState({
                        items: newItems,
                    })
                })
        }
        componentDidMount(){
            this.fetchData();
        
            
        }
            render(){
                return <div>TEST</div>
            }
    }

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