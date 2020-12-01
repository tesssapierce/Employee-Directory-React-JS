import React from "react";

function EmployeeRows (props) {

  return (
    <tr>
      <td><img src={props.picture.medium} alt="image"/></td>
      <td>{props.name.first} {props.name.last}</td>
      <td>{props.location.state}, {props.location.country}</td>
      <td>{props.email}</td>
    </tr>
  )
}

export default EmployeeRows;