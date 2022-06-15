import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import AssetsPage from './pages/AssetsPage/AssetsPage';
import HomePage from './pages/HomePage/HomePage';
import ZonesPage from './pages/ZonesPage/ZonesPage';

function App() {
  return (<>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/zones">Zones</NavLink>
      <NavLink to="/assets">Assets</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/zones" element={<ZonesPage />} />
      <Route path="/assets" element={<AssetsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </>);
}

export default App;
