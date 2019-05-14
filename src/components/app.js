import React, { Component} from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
import Card from "./card/card";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar /> 
        <div className="app-size">
            <Card />
        </div>
      </div>
    );
  }
}

export default App;