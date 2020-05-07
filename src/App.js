import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import MainScreen from "./screens";
import Header from "./components/header";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainScreen />} />
      </Switch>
    </Router>);
}

export default App;
