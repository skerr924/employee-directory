import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow";
import "../Table/style.css";

class Table extends Component {
  state = {
    alphabetical: true,
    ascending: true,
    sortedEmployees: [],
    employees: [],
  };

  componentDidMount() {
    if (this.state.sortedEmployees.length < 1) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.empList !== prevProps.empList) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  sortName = () => {
    let sortEmp = [];
    if (this.state.alphabetical) {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    this.setState({
      alphabetical: !this.state.alphabetical,
      sortedEmployees: sortEmp,
    });
  };

  render() {
    return (
      <table>
        <thead>
          <th>Photo</th>
          <th>
            <p onClick={this.sortName} className="name">
              Name
            </p>
          </th>
          <th>Email</th>
        </thead>
        <tbody>
          {this.state.sortedEmployees.length > 0 &&
            this.state.sortedEmployees.map((item, index) => (
              <EmployeeRow
                image={item.picture.large}
                first={item.name.first}
                last={item.name.last}
                email={item.email}
              />
            ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
