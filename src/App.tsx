import { Route, Routes } from 'react-router-dom';

import { useAnalytics } from 'hooks/analytics/useAnalytics';
import Layout from 'layouts/Layout/Layout';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { AssetsPage } from 'pages/AssetsPage/AssetsPage';
import { HomePage, Sidebar, ZoneDetails, ZonePeers, ZoneOverview, ZonesInfo } from 'pages/HomePage';
import { RedirectFromOldVersionToHomePage } from 'pages/Redirect/RedirectFromOldVersionToHomePage';
import {
  ZonesInfo as ZonesListZonesInfo,
  ZonesPage,
  ZoneNodes as ZonesListZoneNodes,
  ZoneOverview as ZonesListZoneOverview,
  ZonePage as ZonesListZonePage,
  ZonePeers as ZonesListZonePeers,
  ZonePools as ZonesListZonePools,
} from 'pages/ZonesPage';

import './App.scss';

const App = () => {
  useAnalytics();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<RedirectFromOldVersionToHomePage />} />
        <Route path="home" element={<HomePage />}>
          <Route element={<Sidebar />}>
            <Route index element={<ZonesInfo />} />
            <Route path=":zone" element={<ZoneDetails />}>
              <Route path="overview" element={<ZoneOverview />} />
              <Route path="peers" element={<ZonePeers />} />
            </Route>
            <Route path="*" element={<div>Not found.</div>} />
          </Route>
        </Route>
        <Route path="zones" element={<ZonesPage />}>
          <Route index element={<ZonesListZonesInfo />} />
          <Route path=":zone" element={<ZonesListZonePage />}>
            <Route path="overview" element={<ZonesListZoneOverview />} />
            <Route path="peers" element={<ZonesListZonePeers />} />
            <Route path="nodes" element={<ZonesListZoneNodes />} />
            <Route path="pools" element={<ZonesListZonePools />} />
          </Route>
        </Route>
        <Route path="assets" element={<AssetsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<div>Not found.</div>} />
      </Route>
    </Routes>
  );
};

export default App;
