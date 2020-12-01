import React from "react";
import employees from "../employees.json"
import EmployeeRows from "./EmployeeRows"
import Header from "./Header"
import Search from "./Search"

class EmployeeManager extends React.Component {

  state = {
    employeesArr: employees,
    query: "",
    sortType: "desc",
  }

  sortByAlpha = () => {
    switch (this.state.sortType){
      case "desc" : 
        const ascEmployeeArr = this.state.employeesArr.sort(function(a,b){
          if(a.name.first < b.name.first) { return -1; }
          if(a.name.first > b.name.first) { return 1; }
          return 0;
        })
        this.setState({...this.state, sortType: "asc", employeesArr: ascEmployeeArr})
        break;
      case "asc" : 
      const descEmployeeArr = this.state.employeesArr.sort(function(a,b){
        if(a.name.first < b.name.first) { return 1; }
        if(a.name.first > b.name.first) { return -1; }
        return 0;
      })
      this.setState({...this.state, sortType: "desc", employeesArr: descEmployeeArr})
      break;
      default :
      break;
    }
  }

  handleInputChange = event => {
    var value = event.target.value;
    this.setState({query: value})

    var filter = employees.filter( employee => {
      var checkValues = Object.values(employee)
      .join("").toLowerCase()
      return checkValues.indexOf(value.toLowerCase()) !== -1
    })
    this.setState({employeesArr: filter})
  };


  render() {
    return (
      <>
      <Header />
      <Search 
      value={this.state.query}
      handleInputChange={this.handleInputChange}
      /> 
      <div className="container">
        <div className="row">
          <div className="col-10 contentBlock">
            <table>
              <tr>
                <th>Image</th>
                <th onClick={this.sortByAlpha}>Name</th>
                <th>Location</th>
                <th>Email</th>
              </tr>
              {this.state.employeesArr.map(employee => (
              <EmployeeRows key={employee.id.value} {...employee} />
            ))}
            </table> 
          </div>
        </div>
      </div>
      </>
    )
  }

}

export default EmployeeManager;