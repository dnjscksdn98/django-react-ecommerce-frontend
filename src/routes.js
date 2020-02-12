import React from "react";
import { Route } from "react-router-dom";

import ProductList from "./containers/ProductList";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";

const BaseRouter = () => (
  <>
    <Route path="/products" component={ProductList} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
  </>
);

export default BaseRouter;
