import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";
import Employee from "./pages/employees/employees";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Dashboard/> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/dashboard" />;
            }}
          />
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/Employees" exact component={Employee}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
