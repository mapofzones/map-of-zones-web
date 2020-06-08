import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './pages/Map';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Map />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
