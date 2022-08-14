export interface Page {
  key: string;
  pathname: string;
  search: {
    columnKey?: string;
    period?: string;
  };
  title: string;
}

export const PAGE_TITLE: Record<string, string> = {
  Assets: 'assets page',
  Home: 'home',
  HomeOverview: 'home zone overview',
  HomePeers: 'home zone peers',
  ZoneOverview: 'zone overview page',
  ZonePeers: 'zone peers page',
  ZonesList: 'zones list page',
};
