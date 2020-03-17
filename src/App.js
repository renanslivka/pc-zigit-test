import React, { useState } from "react";
import "./App.css";
import LoginPage from "./component/Login/LoginPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CoursesPage from "./component/Courses/CoursesPage";

function App() {
  const [data, setdata] = useState();
  const onSubmitButton = d => {
    setdata(d);

    localStorage.setItem("isSignedIn", JSON.stringify(true));
    console.log(d);
  };
  return (
    <Router history={Router}>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <LoginPage onSubmitButton={onSubmitButton} {...props} />
          )}
        />{" "}
        />
        <Route
          path="/CoursesPage"
          render={props => <CoursesPage data={data} {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
