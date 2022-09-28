import React, { ReactNode, useRef } from 'react';

import cn from 'classnames';

import { useLaptopLargeMediaQuery } from 'hooks/useMediaQuery';

import styles from './Table.module.scss';
import { TableProps } from './Table.props';
import { TableHeader } from './TableHeader/TableHeader';

export function Table<T extends string>({
  children,
  className,
  headerConfig,
  selectedColumnKey,
  setSelectedColumnKey,
}: TableProps<T>) {
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
        <TableHeader
          config={headerConfig}
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={setSelectedColumnKey}
        />

        <tbody>
          {children &&
            React.Children.map<ReactNode, ReactNode>(children, (child) => {
              if (!React.isValidElement(child)) {
                return child;
              }

              return React.cloneElement(child, {
                isTableHorizontalScrollable,
              });
            })}
        </tbody>
      </table>
    </div>
  );
}
