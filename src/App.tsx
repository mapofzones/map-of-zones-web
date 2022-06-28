import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Layout from './layouts/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import AssetsPage from './pages/AssetsPage/AssetsPage';
import HomePage from './pages/HomePage/HomePage';
import ZonesPage from './pages/ZonesPage/ZonesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="zones" element={<ZonesPage />} />
        <Route path="assets" element={<AssetsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
