import React from "react";
import "../EmployeeRow/style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <td>
        <img alt={props.last} src={props.image}></img>
      </td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.phone}</td>
      <td>{props.gender}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default EmployeeRow;
