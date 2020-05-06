import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import MainScreen from "./screens/main";
import BlogScreen from "./screens/blog";
import Header from "./components/header";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainScreen />} />
        <Route exact path="/blog" render={() => <BlogScreen />} />
      </Switch>
    </Router>);
}

export default App;
