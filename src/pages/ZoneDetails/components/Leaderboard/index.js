import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

import { formatNumber, trackEvent } from 'common/helper';

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
  setFocusedZone,
  focusedZoneId,
  filter,
}) {
  const globalFilter = useMemo(
    () => (rows, columnIds, filterValue) => filterValue(rows),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    columns,
    setGlobalFilter,
  } = useTable(
    {
      data,
      initialState,
      disableMultiSort,
      disableSortRemove,
      globalFilter,
      columns: columnsConfig,
    },
    useGlobalFilter,
    useSortBy,
  );

  const sortBy = state?.sortBy?.[0];
  const initialSortBy = initialState?.sortBy?.[0];
  const sortedColumn = columns.find(({ isSorted }) => isSorted);

  useEffect(() => {
    if (sortedColumn) {
      onSortChange({ ...sortedColumn });

      if (sortBy !== initialSortBy) {
        trackEvent({
          category: 'Table',
          action: 'sort',
          label: sortedColumn.id,
          extra: { direction: sortBy?.desc ? 'desc' : 'asc' },
        });
      }
    }
  }, [sortBy, initialSortBy, sortedColumn, onSortChange]);

  useEffect(() => {
    setGlobalFilter(() => rowsToSort => filter(rowsToSort, sortBy));
  }, [setGlobalFilter, filter, sortBy]);

  const renderCell = cell => {
    switch (cell.column.id) {
      case 'blank':
        return <div>-</div>;
      case 'txsActivity':
        return cell.render('Cell');
      case 'name':
        return (
          <div className={cx('cell-container')}>
            <span className={cx('text-container')}>
              <div
                className={cx('IBC-circle', {
                  ibcReceived: cell.row.original.is_opened,
                  ibcSent: !cell.row.original.is_opened,
                })}
              />
              {cell.row.original.channel_id}
            </span>
            <span className={cx('subtext-container')}>
              <div
                className={cx('IBC-circle', 'hided', {
                  ibcReceived: cell.row.original.is_opened,
                  ibcSent: !cell.row.original.is_opened,
                })}
              />
              {cell.render('Cell')}
            </span>
          </div>
        );
      case 'zone_counerparty':
        return (
          <div className={cx('cell-container')}>
            <span className={cx('text-container')}>{cell.render('Cell')}</span>
          </div>
        );
      default:
        return (
          <span className={cx('text-container')}>
            {cell.render('Cell')}
            {!cell.column.disableSortBy && (
              <div
                className={cx('shift-tooltip', {
                  negative: cell.row.original[cell.column.id + '_diff'] < 0,
                })}
              >
                {cell.row.original[cell.column.id + '_diff'] > 0
                  ? '+' +
                    formatNumber(cell.row.original[cell.column.id + '_diff'])
                  : formatNumber(cell.row.original[cell.column.id + '_diff'])}
              </div>
            )}
          </span>
        );
    }
  };

  const focusZone = useCallback(
    zone => {
      setFocusedZone(zone);

      trackEvent({
        category: 'Table',
        action: 'select zone',
        label: zone.name,
      });
    },
    [setFocusedZone],
  );

  return (
    <div id="table-container" className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        <Thead headerGroups={headerGroups} onHeaderClick={() => {}} />
        <tbody
          {...getTableBodyProps()}
          className={cx({ bodyWithFocus: !!focusedZoneId })}
        >
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={cx('row', {
                  focusedRow: row.original.id === focusedZoneId,
                })}
                onClick={() => {
                  focusZone(row.original);
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={cx('cell', cell.column.id, {
                        ibcReceived: cell.column.Header === 'IBC Success',
                        ibcSent: cell.column.Header === 'IBC Failed',
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
  filter: PropTypes.func,
};

Leaderboard.defaultProps = {
  onSortChange: () => {},
  initialState: {},
  disableMultiSort: true,
  disableSortRemove: true,
  setFocusedZone: () => {},
  filter: rows => rows,
};

export default Leaderboard;
