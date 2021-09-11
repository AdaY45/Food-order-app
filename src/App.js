import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Food-order-app/" />
        </Route>
        <Route path="/Food-order-app/">
          <Main />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
