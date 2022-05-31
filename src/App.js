/*
*App.js
*/
import Tabela from "./Tabela";
import Tabela02 from "./Tabela02";
import Tabela03 from "./Tabela03";
import React from "react";

class App extends React.Component{
  render(){

    //define the data that is going to be used by Table03
    const students = [
      {
        name:"Ana",
        surname:"Graquio",      
      },
      {
        name:"Danil",
        surname:"Graqua",      
      },
      {
        name:"Refactor",
        surname:"Product",      
      },
      {
        name:"Rodrigo",
        surname:"Bendes",      
      },
    ]

    return(
      <div className="container">
        {/* we are using JSX. 'className' will be changed, in execution mode, to 'class' */}

        <h1>First Student's lists</h1>
        <Tabela />

        <br></br>
        <h1>Second Student's lists</h1>
        <Tabela02 />

        <br></br>
        <h1>Third Student's lists</h1>
        <Tabela03 studentsDataIN={students}/>
      </div>
    )
  }
}

export default App;
