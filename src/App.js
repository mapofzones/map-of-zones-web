import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
