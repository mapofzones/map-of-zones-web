import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ZoneDetails from './pages/ZoneDetails';
import ErrorPage from './pages/ErrorPage';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="/zone">
          <ZoneDetails />
        </Route>
        <Route path="/">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
