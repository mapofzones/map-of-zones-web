import { Route, Routes } from 'react-router-dom';

import Layout from 'layouts/Layout/Layout';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { AssetsPage } from 'pages/AssetsPage/AssetsPage';
import { HomePage, Sidebar, ZoneDetails, ZoneOverview, ZonesInfo } from 'pages/HomePage';
import { RedirectFromOldVersionToHomePage } from 'pages/Redirect/RedirectFromOldVersionToHomePage';
import { ZonesPage } from 'pages/ZonesPage';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<RedirectFromOldVersionToHomePage />} />
        <Route path="home" element={<HomePage />}>
          <Route element={<Sidebar />}>
            <Route index element={<ZonesInfo />} />
            <Route path=":zone" element={<ZoneDetails />}>
              <Route path="overview" element={<ZoneOverview />} />
            </Route>
            <Route path="*" element={<div>Not found.</div>} />
          </Route>
        </Route>
        <Route path="zones" element={<ZonesPage />} />
        <Route path="assets" element={<AssetsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<div>Not found.</div>} />
      </Route>
    </Routes>
  );
};

export default App;
