import React from 'react';
import classNames from 'classnames/bind';
import { useTable, useSortBy } from 'react-table';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Leaderboard({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  const firstPageRows = rows.slice(0, 20);

  return (
    <table {...getTableProps()} className={cx('table')}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(
                  column.id !== 'txsActivity'
                    ? column.getSortByToggleProps()
                    : undefined,
                )}
                className={cx('header')}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ArrowDown />
                    ) : (
                      <ArrowDown style={{ transform: 'rotate(-180deg)' }} />
                    )
                  ) : (
                    ''
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={cx('cell', {
                      positionCell: cell.column.id === 'position',
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Leaderboard;
