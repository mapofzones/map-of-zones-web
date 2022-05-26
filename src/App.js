import Loader from 'components/Loader';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Map = React.lazy(() =>
  import(/* webpackChunkName: "MapComponent" */ './pages/Map'),
);
const ZoneDetails = React.lazy(() =>
  import(/* webpackChunkName: "ZoneDetailsComponent" */ './pages/ZoneDetails'),
);
const ErrorPage = React.lazy(() =>
  import(/* webpackChunkName: "ErrorPageComponent" */ './pages/ErrorPage'),
);

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
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
      </React.Suspense>
    </Router>
  );
}

export default App;
