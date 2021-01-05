import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import "./styles/index.scss";

import Layout from "./components/Layout";
import { Container,Row,Col } from "react-bootstrap";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>
  );
}

export default App;
