import React, { Component } from "react";
import Table from "../Table";

class DataArea extends Component {
  state = {
    searchValue: "",
    employeesMatchSearch: [],
  };

  componentDidMount() {
    if (this.state.employeesMatchSearch.length < 1) {
      this.setState({
        employeesMatchSearch: this.props.employees,
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
    let inputValue = event.target.value;
    const matching = this.props.employees.filter((item) => {
      let values = item.name.first + item.name.last + item.gender + item.email;
      return values.indexOf(inputValue) !== -1;
    });

    this.setState({
      employeesMatchSearch: matching,
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.searchValue}
            name="searchValue"
            onChange={(event) => this.handleInputChange(event)}
            type="text"
            placeholder="Search"
          />
        </form>
        {this.state.employeesMatchSearch.length > 0 && (
          <Table empList={this.state.employeesMatchSearch} />
        )}
      </div>
    );
  }
}

export default DataArea;
