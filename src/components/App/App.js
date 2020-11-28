import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from 'standalone/Navbar';

import { CatsPage, VotePage } from 'routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/cats">
          <CatsPage />
        </Route>
        <Route path="/vote">
          <VotePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/cats" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
