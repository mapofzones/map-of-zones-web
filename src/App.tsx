import { Navigate, Route, Routes } from 'react-router-dom';

import { Sidebar, ZoneDetailsSidebar, ZonesSidebar } from 'pages/HomePage';

import './App.scss';

import Layout from './layouts/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import AssetsPage from './pages/AssetsPage/AssetsPage';
import HomePage from './pages/HomePage/HomePage';
import ZonesPage from './pages/ZonesPage/ZonesPage';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="map" />} />
        <Route path="map" element={<HomePage />}>
          <Route element={<Sidebar />}>
            <Route index element={<ZonesSidebar />} />
            <Route path=":zone/overview" element={<ZoneDetailsSidebar />} />
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
