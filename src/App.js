import { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AddCourse from "./Component/AddCourse/AddCourse";
import CoursesScreen from "./Component/CoursesScreen/CoursesScreen";
import EditCourse from "./Component/EditCourse/EditCourse";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/add-course" component={AddCourse} />
          <Route path="/edit-course" component={EditCourse} />
          <Route path="/" component={CoursesScreen} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
