/* 
*Tabela.js
*
*This table show a simple list of students
*/

import React,{Component} from "react";

class Tabela extends Component{

    render(){
        return(

        <table className="table table-hover">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ana</td>
              <td>Lopes</td>
            </tr>
            <tr>
              <td>Mário</td>
              <td>Silva</td>
            </tr>
            <tr>
              <td>Alberto</td>
              <td>Josefino</td>
            </tr>
            <tr>
              <td>Maria</td>
              <td>Albertina</td>
            </tr>
          </tbody>
        </table>

        )
    }

}

export default Tabela;