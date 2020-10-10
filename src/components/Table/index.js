import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow";
import "../Table/style.css";

class Table extends Component {
  state = {
    alpha: false,
    revAlpha: false,
    ascending: true,
    sortedEmployees: [],
    employees: [],
  };

  componentDidMount() {
    this.setState({
      sortedEmployees: this.props.empList,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.empList !== prevProps.empList) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  sortNameAZ = () => {
    let sortedList = [];
    // if (!this.state.alpha) {
    sortedList = this.props.empList.sort((a, b) => {
      var nameA = a.name.last.toLowerCase();
      var nameB = b.name.last.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    this.setState({
      alpha: true,
      revAlpha: false,
      sortedEmployees: sortedList,
    });
  };

  sortNameZA = () => {
    let sortedList = [];
    // if (!this.state.alpha) {
    sortedList = this.props.empList.sort((a, b) => {
      var nameA = a.name.last.toLowerCase();
      var nameB = b.name.last.toLowerCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
    this.setState({
      alpha: false,
      revAlpha: true,
      sortedEmployees: sortedList,
    });
  };

  render() {
    return (
      <table>
        <thead>
          <th>Photo</th>
          <th class="nameButton">
            <button class="arrowBtn btn btn-light" onClick={this.sortNameAZ}>
              ↓
            </button>
            Name
            <button class="arrowBtn btn btn-light" onClick={this.sortNameZA}>
              ↑
            </button>
          </th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Email</th>
        </thead>
        <tbody>
          {this.state.sortedEmployees.length > 0 &&
            this.state.sortedEmployees.map((item) => (
              <EmployeeRow
                image={item.picture.large}
                first={item.name.first}
                last={item.name.last}
                email={item.email}
                phone={item.phone}
                gender={item.gender}
              />
            ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
