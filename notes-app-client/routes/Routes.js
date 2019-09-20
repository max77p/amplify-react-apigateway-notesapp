import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/containers/Home";
import NotFound from "../src/containers/NotFound";
import Login from "../src/containers/Login";
import AppliedRoute from "../src/components/AppliedRoute";
import Signup from "../src/containers/Signup";
import NewNote from "../src/containers/NewNote";
import Notes from "../src/containers/Notes";
import AuthenticatedRoute from "../src/components/AuthenticatedRoute";
import UnauthenticatedRoute from "../src/components/UnauthenticatedRoute";






export default ({childProps}) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>

);
