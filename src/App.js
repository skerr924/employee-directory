import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import DataArea from "./components/DataArea";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.fetchUsers().then((res) => {
      this.setState({ employees: res.data.results });
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Jumbotron />
          {this.state.employees.length > 0 && (
            <DataArea employees={this.state.employees} />
          )}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
