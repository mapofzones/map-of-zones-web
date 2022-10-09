import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NodeData {
  id: string;
  moniker: string;
  ip: string;
  country: string;
  isp: string;
  dataCenter: string;
  lastSync: string;
  apiType: string;
  apiUrl: string;
  txIndexing: boolean;
}

export interface TableRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  index: number;
  isTableHorizontalScrollable?: boolean;
  node: NodeData;
}
