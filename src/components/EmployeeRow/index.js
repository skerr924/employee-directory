import React from "react";
import "../EmployeeRow/style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <td>
        <img alt={props.last} src={props.image}></img>
      </td>
      <td>
        {" "}
        {props.first} {props.last}{" "}
      </td>
      <td>{props.email}</td>
    </tr>
  );
}

export default EmployeeRow;
