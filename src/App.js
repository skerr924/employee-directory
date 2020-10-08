import React from "react";
import Headers from "./components/Headers";
import Nav from "./components/Nav";
// import employees from "./data/employees.json";
// import TableData from "./components /TableData";
import API from "./utils/API";

function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [sorted, setSorted] = useState(false);
  // const [data, setEmployees] = useState(employees);

  // function handleSearchTerm(event) {
  //   setSearchTerm(event.target.value);
  // }

  // function handleSortByName() {
  //   if (sorted) {
  //     setEmployees(data.sort((a, b) => (a.name > b.name ? -1 : 1)));
  //     setSorted(false);
  //   } else {
  //     setEmployees(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
  //     setSorted(true);
  //   }
  // }

  // function handleSortByDept() {
  //   // sort array ascending or descending by dept name
  //   if (!sorted) {
  //     setEmployees(data.sort((a, b) => (a.department > b.department ? 1 : -1)));
  //     setSorted(true);
  //   } else {
  //     setEmployees(data.sort((a, b) => (a.department > b.department ? -1 : 1)));
  //     setSorted(false);
  //   }
  // }

  // the filteredEmployees variable only stores employee names that start with with the matching string you type
  // const filteredEmployees = data.filter((employee) =>
  //   employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  // );
  return (
    <div>
      <Nav />
      <Headers />
      {/* <TableData /> */}
      <p>{API.getAllUsers()}</p>
    </div>
  );
}

export default App;
