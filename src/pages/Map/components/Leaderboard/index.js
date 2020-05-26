import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy } from 'react-table';

import { trackEvent } from 'common/helper';

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
  period,
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
  const initialSortBy = initialState?.sortBy?.[0];
  const sortedColumn = columns.find(({ isSorted }) => isSorted);

  useEffect(() => {
    onSortChange({ ...sortedColumn });

    if (sortBy !== initialSortBy) {
      trackEvent({
        category: 'Table',
        action: 'sort',
        label: sortedColumn.id,
        extra: { direction: sortBy?.desc ? 'desc' : 'asc' },
      });
    }
  }, [sortBy, initialSortBy, sortedColumn, onSortChange]);

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

  const focusZone = useCallback(
    zone => {
      setFocusedZone(zone);

      if (isTableOpened) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      trackEvent({
        category: 'Table',
        action: 'select zone',
        label: zone.name,
        extra: { period: period?.rawText },
      });
    },
    [setFocusedZone, isTableOpened, period],
  );

  useEffect(() => {
    let table = document.getElementById('table-container');
    let fixedHeader = document.getElementById('fixed-header');
    let fixedRow = document.getElementById('fixed-row');

    const onTableScroll = event => {
      [fixedHeader, fixedRow].forEach(item => {
        if (item) {
          item.style.transform = `translateX(-${event.target.scrollLeft}px)`;
        }
      });
    };

    if (
      isTableOpened === 'fixed-thead' &&
      document.documentElement.clientWidth < 1120
    ) {
      [fixedHeader, fixedRow].forEach(item => {
        if (item) {
          item.style.transform = `translateX(-${table.scrollLeft}px)`;
        }
      });

      table.addEventListener('scroll', onTableScroll);
    }

    return () => {
      if (fixedRow) fixedRow.style.transform = 'unset';
      table.removeEventListener('scroll', onTableScroll);
    };
  }, [isTableOpened, focusedZoneId]);

  return (
    <div
      id="table-container"
      className={cx('table-container', { fixedTable: isTableOpened })}
    >
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
                  focusZone(row.original);
                }}
                id={
                  row.original.id === focusedZoneId &&
                  isTableOpened === 'fixed-thead'
                    ? 'fixed-row'
                    : ''
                }
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
  period: PropTypes.shape({
    hours: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.node,
    rawText: PropTypes.string,
  }),
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
