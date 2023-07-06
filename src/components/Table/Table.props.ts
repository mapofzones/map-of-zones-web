import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { IZonesTableMetadata } from 'pages/ZonesPage/ZonesInfo/ZonesTable/ZonesTableMetadataProvider';

export interface TableProps<T extends string>
  extends IZonesTableMetadata<T>,
    DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  children: ReactNode;
  className?: string;
}
