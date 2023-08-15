import React, { ReactNode, useRef } from 'react';

import cn from 'classnames';

import { useLaptopLargeMediaQuery } from 'hooks/useMediaQuery';
import { ZonesTableMetadataProvider } from 'pages/ZonesPage/ZonesInfo/ZonesTable/ZonesTableMetadataProvider';

import styles from './Table.module.scss';
import { TableProps } from './Table.props';
import { TableHeader } from './TableHeader/TableHeader';

export function Table<T extends string>({
  children,
  className,
  headerMetadata,
  selectedColumnKey,
  setSelectedColumnKey,
}: TableProps<T>) {
  return (
    <ZonesTableMetadataProvider
      headerMetadata={headerMetadata}
      selectedColumnKey={selectedColumnKey}
      setSelectedColumnKey={setSelectedColumnKey}
    >
      <TableContentMemo className={className}>{children}</TableContentMemo>
    </ZonesTableMetadataProvider>
  );
}

export function TableContent({ children, className }: { children: ReactNode; className?: string }) {
  const tableRef = useRef<HTMLTableElement>(null);

  const isTableHorizontalScrollable = useLaptopLargeMediaQuery();

  return (
    <div
      className={cn(
        styles.container,
        { [styles.horizontalScrollable]: isTableHorizontalScrollable },
        className
      )}
    >
      <table className={styles.table} ref={tableRef}>
        <TableHeader />

        <tbody>
          {children &&
            React.Children.map<ReactNode, ReactNode>(children, (child) => {
              if (!React.isValidElement(child)) {
                return child;
              }

              return React.cloneElement(child, {
                isTableHorizontalScrollable,
              } as any);
            })}
        </tbody>
      </table>
    </div>
  );
}

export const TableContentMemo = React.memo(TableContent) as typeof TableContent;
