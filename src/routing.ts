/* eslint-disable sort-exports/sort-exports */
export const rootOldPath = '/';

export const zoneOldPath = 'zone';

export const homePath = 'home';

export const zonesPath = 'zones';

export const assetsPath = 'assets';

export const swapPath = 'swap';

export const aboutPath = 'about';

export const zonesComparison = 'comparison';

export const zoneWithParamPath = ':zone';

export const overviewPath = 'overview';

export const peersPath = 'peers';

export const nodesPath = 'nodes';

export const poolsPath = 'pools';

export const getHomeZoneOverviewPath = (zonePart: string = zoneWithParamPath) => {
  return `${homePath}/${zonePart}/${overviewPath}`;
};

export const getHomeZonePeersPath = (zonePart: string = zoneWithParamPath) => {
  return `${homePath}/${zonePart}/${peersPath}`;
};

export const getZonesOverviewPath = (zonePart: string = zoneWithParamPath) => {
  return `${zonesPath}/${zonePart}/${overviewPath}`;
};

export const getZonesComparisonPath = () => {
  return `${zonesPath}/${zonesComparison}`;
};

export const getZonesComparisonSearchPath = (zones: string[] = []) => {
  return zones && zones.length ? '?' + zones.map((zone) => `zones=${zone}`).join('&') : '';
};

export const getZonesPeersPath = (zonePart: string = zoneWithParamPath) => {
  return `${zonesPath}/${zonePart}/${peersPath}`;
};
