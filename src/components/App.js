import React, { Component } from "react";
import "../styles/App.css";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Error from "./Error";

class App extends Component {
  render() {
    return (
      <div id="main">
        <BrowserRouter>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
