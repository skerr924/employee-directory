import React from "react";

function TableData(props) {
  return (
    <tbody>
      {props.data.map((data) => (
        <tr>
          <td>{data.firstname}</td>
          <td>{data.lastname}</td>
          <td>{data.email}</td>
          <td>
            <img
              src={data.picture.medium}
              alt="profile"
              className="img-responsive"
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableData;
