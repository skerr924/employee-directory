import React from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import TableHead from "./components/TableHead";

function App() {
  return (
    <div>
      <Jumbotron />
      <Wrapper>
        <table className="table">
          <TableHead />
        </table>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
