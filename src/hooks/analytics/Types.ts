export interface Page {
  key: string;
  pathname: string;
  search: SearchProps;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state?: any;
}

export interface SearchProps {
  columnKey?: string;
  period?: string;
  utm_source?: string;
  searchZone?: string;
  mapType?: string;
}

export const PAGE_TITLE: Record<string, string> = {
  Assets: 'assets page',
  Home: 'home',
  HomeOverview: 'home zone overview',
  HomePeers: 'home zone peers',
  ZoneOverview: 'zone overview page',
  ZonePeers: 'zone peers page',
  ZonesList: 'zones list page',
  Swap: 'swap',
};
