import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/containers/Home";
import NotFound from "../src/containers/NotFound";
import Login from "../src/containers/Login";
import AppliedRoute from "../src/components/AppliedRoute";
import Signup from "../src/containers/Signup";
import NewNote from "../src/containers/NewNote";




export default ({childProps}) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>

);
