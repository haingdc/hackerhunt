import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

const Search = () => {
  return <div>Search Component</div>;
};

export default App;
