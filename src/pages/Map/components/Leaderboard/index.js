import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy } from 'react-table';
import Thead from './Thead';

import columnsConfig from './config';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Leaderboard({
  data,
  onSortChange,
  initialState,
  disableMultiSort,
  disableSortRemove,
  isTableOpened,
  handleScroll,
  setFocusedZone,
  focusedZoneId,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    columns,
  } = useTable(
    {
      data,
      initialState,
      disableMultiSort,
      disableSortRemove,
      columns: columnsConfig,
    },
    useSortBy,
  );

  const sortBy = state?.sortBy?.[0];
  const sortedColumn = columns.find(({ isSorted }) => isSorted);

  useEffect(() => onSortChange({ ...sortedColumn }), [
    sortBy,
    sortedColumn,
    onSortChange,
  ]);

  useEffect(() => {
    let table = document.documentElement.querySelector('table');
    window.addEventListener('scroll', () => handleScroll(table));

    return window.removeEventListener('scroll', () => handleScroll(table));
  }, [handleScroll]);

  const renderCell = cell => {
    switch (cell.column.id) {
      case 'txsActivity':
        return cell.render('Cell');
      case 'name':
        return (
          <div className={cx('cell-container')}>
            <span className={cx('text-container')}>{cell.render('Cell')}</span>
            {cell.row.original[sortedColumn.id + 'RatingDiff'] !== 0 && (
              <span
                className={cx('position-shift', {
                  negative:
                    cell.row.original[sortedColumn.id + 'RatingDiff'] < 0,
                })}
              >
                {cell.row.original[sortedColumn.id + 'RatingDiff']}
              </span>
            )}
          </div>
        );
      default:
        return (
          <span className={cx('text-container')}>
            {cell.render('Cell')}
            {!cell.column.disableSortBy && (
              <div
                className={cx('shift-tooltip', {
                  negative: cell.row.original[cell.column.id + 'Diff'] < 0,
                })}
              >
                {cell.row.original[cell.column.id + 'Diff'] > 0
                  ? '+' + cell.row.original[cell.column.id + 'Diff']
                  : cell.row.original[cell.column.id + 'Diff']}
              </div>
            )}
          </span>
        );
    }
  };

  return (
    <div className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        <Thead headerGroups={headerGroups} />
        <Thead
          headerGroups={headerGroups}
          fixed
          isTableOpened={isTableOpened}
        />

        <tbody
          {...getTableBodyProps()}
          className={cx(
            { bodyWithFocus: !!focusedZoneId },
            { focusFixed: !!focusedZoneId && isTableOpened === 'fixed-thead' },
          )}
        >
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={cx(
                  'row',
                  { focusedRow: row.original.id === focusedZoneId },
                  {
                    fixed:
                      row.original.id === focusedZoneId &&
                      isTableOpened === 'fixed-thead',
                  },
                )}
                onClick={() => {
                  setFocusedZone(row.original);
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={cx('cell', cell.column.id, {
                        sortedColumn: cell.column.isSorted,
                      })}
                    >
                      {renderCell(cell)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Leaderboard.propTypes = {
  data: PropTypes.array, // TODO
  onSortChange: PropTypes.func,
  initialState: PropTypes.object,
  disableMultiSort: PropTypes.bool,
  disableSortRemove: PropTypes.bool,
  focusedZoneId: PropTypes.string,
  setFocusedZone: PropTypes.func,
};

Leaderboard.defaultProps = {
  onSortChange: () => {},
  initialState: {
    sortBy: [
      {
        id: 'totalIbcTxs',
        desc: true,
      },
    ],
  },
  disableMultiSort: true,
  disableSortRemove: true,
  setFocusedZone: () => {},
};

export default Leaderboard;
