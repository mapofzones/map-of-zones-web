import { Route, Routes } from 'react-router-dom';

import Layout from 'layouts/Layout/Layout';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import AssetsPage from 'pages/AssetsPage/AssetsPage';
import { HomePage, Sidebar, ZoneDetails, ZonePeers, ZoneOverview, ZonesInfo } from 'pages/HomePage';
import { RedirectFromOldVersionToHomePage } from 'pages/Redirect/RedirectFromOldVersionToHomePage';
import { RedirectFromOldVersionToZonePage } from 'pages/Redirect/RedirectFromOldVersionToZonePage';
import SwapPage from 'pages/SwapPage/SwapPage';
import {
  ZonesInfo as ZonesListZonesInfo,
  ZonesPage,
  ZonePage as ZonesListZonePage,
  ZoneNodes as ZonesListZoneNodes,
  ZoneOverview as ZonesListZoneOverview,
  ZonePeers as ZonesListZonePeers,
  ZonePools as ZonesListZonePools,
} from 'pages/ZonesPage';
import * as path from 'routing';

export function AppRouting() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={path.rootOldPath} element={<RedirectFromOldVersionToHomePage />} />
        <Route path={path.zoneOldPath} element={<RedirectFromOldVersionToZonePage />} />
        <Route path={path.homePath} element={<HomePage />}>
          <Route element={<Sidebar />}>
            <Route index element={<ZonesInfo />} />
            <Route path={path.zoneWithParamPath} element={<ZoneDetails />}>
              <Route path={path.overviewPath} element={<ZoneOverview />} />
              <Route path={path.peersPath} element={<ZonePeers />} />
            </Route>
            <Route path="*" element={<div>Not found.</div>} />
          </Route>
        </Route>
        <Route path={path.zonesPath} element={<ZonesPage />}>
          <Route index element={<ZonesListZonesInfo />} />

          <Route path={path.zoneWithParamPath} element={<ZonesListZonePage />}>
            <Route path={path.overviewPath} element={<ZonesListZoneOverview />} />
            <Route path={path.peersPath} element={<ZonesListZonePeers />} />
            <Route path={path.nodesPath} element={<ZonesListZoneNodes />} />
            <Route path={path.poolsPath} element={<ZonesListZonePools />} />
          </Route>
        </Route>
        <Route path={path.assetsPath} element={<AssetsPage />} />
        <Route path={`${path.swapPath}/*`} element={<SwapPage />} />
        <Route path={path.aboutPath} element={<AboutPage />} />
        <Route path="*" element={<div>Not found.</div>} />
      </Route>
    </Routes>
  );
}
