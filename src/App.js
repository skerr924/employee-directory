import React from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Jumbotron />
      <Wrapper>
        {/* <Header />
          <Table /> table will contain table headers and table body  */}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
