import { Align } from 'components/Table/TableHeader/TableHeaderItem/TableHeaderItem.props';

export enum ColumnKeys {
  LastSync = 'LastSync',
}

export const TABLE_HEADER_CONFIG = [
  {
    title: '#',
    align: Align.Left,
  },
  {
    title: 'Moniker',
    align: Align.Left,
  },
  {
    title: 'Node ID',
    align: Align.Left,
  },
  {
    title: 'IP Address',
    align: Align.Left,
  },
  {
    title: 'Country',
    align: Align.Left,
  },
  {
    title: 'ISP',
    align: Align.Left,
  },
  {
    title: 'Data center',
    align: Align.Left,
  },
  {
    title: 'Last sync',
    align: Align.Left,
  },
  {
    title: 'API Type',
    align: Align.Left,
  },
  {
    title: 'TX Indexing',
    align: Align.Left,
  },
];
