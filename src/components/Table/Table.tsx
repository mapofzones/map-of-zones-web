import React, { ReactNode, useRef } from 'react';

import cn from 'classnames';

import { useWindowSize } from 'hooks/useWindowSize';

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

  const { width: windowWidth } = useWindowSize();

  const isTableScrollable =
    !!tableRef.current?.offsetWidth && tableRef.current.offsetWidth > windowWidth;

  return (
    <div className={cn(styles.container, { [styles.scrollable]: isTableScrollable }, className)}>
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
                isTableScrollable,
              });
            })}
        </tbody>
      </table>
    </div>
  );
}
