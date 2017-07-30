import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", function(){
 

    class TodoList extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    items: [],
                }
        }
        
        componentDidMount(){
            const url = "http://localhost:3000/items"
    
            fetch(url)
                .then( response => {
                    if(response.ok) { 
                        return response.json()
                    } else {
                        throw new Error("error");
                    }
            })
            .then(answer => {

                this.setState({ 
                    items: answer,
                })

            }).catch( err => {
                console.log("Błąd", err);
            })
        }   

            
            render(){
                let items = [...this.state.items].map(item=>{
                    return <li 
                            key= {item.id}>{item.task}
                        </li>
                });

                return <section>
                            <ul>
                                {items}
                            </ul>
                </section>
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