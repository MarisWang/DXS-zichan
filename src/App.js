import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import history from "./js/history";
import DashboardIndex from "./components";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <DashboardIndex />
      </Router>
    );
  }
}
