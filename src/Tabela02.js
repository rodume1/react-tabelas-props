/* 
*Tabela.js
*
*This table show a simple list of students
*/

import React,{Component} from "react";

function Header() {
  return (
    <thead>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
      </tr>
    </thead>
  )
}

//lambda function or arrow function
const Body = () => {
  return(
    <tbody>
      <tr>
        <td>Ana</td>
        <td>Graquio</td>
      </tr>
      <tr>
        <td>Danil</td>
        <td>Graqua</td>
      </tr>
      <tr>
        <td>Refactor</td>
        <td>Product</td>
      </tr>
      <tr>
        <td>Rodrigo</td>
        <td>Bendes</td>
      </tr>
    </tbody>
  )
}


class Tabela02 extends Component{

    render(){
        return(

        <table className="table table-hover">
          <Header/>
          <Body />
        </table>

        )
    }

}

export default Tabela02;