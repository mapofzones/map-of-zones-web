import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy, useGlobalFilter, useExpanded } from 'react-table';

import { isNumber } from 'common/helper';
import Status from 'components/Status';

import { ReactComponent as ArrowUp } from './assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';

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
    useExpanded,
  );

  const sortBy = state?.sortBy?.[0];
  const initialSortBy = initialState?.sortBy?.[0];
  const sortedColumn = columns.find(({ isSorted }) => isSorted);

  const focusZone = useCallback(
    zone => {
      setFocusedZone(zone);
    },
    [setFocusedZone],
  );

  useEffect(() => {
    if (sortedColumn) {
      onSortChange({ ...sortedColumn });
    }
  }, [sortBy, initialSortBy, sortedColumn, onSortChange]);

  useEffect(() => {
    setGlobalFilter(() => rowsToSort => filter(rowsToSort, sortBy));
  }, [setGlobalFilter, filter, sortBy]);

  const renderCell = cell => {
    switch (cell.column.id) {
      case 'name': {
        if (cell.row.depth === 0) {
          if (cell.row.isExpanded) {
            return (
              <div className={cx('zonesPairContainer')}>
                <div className={cx('expandArrowContainer')}>
                  <ArrowUp className={cx('expandArrow')} />
                </div>
                <div className={cx('zonesPair')}>
                  <div className={cx('zoneInfoHeader')}>
                    {cell.row.original.sourceZoneLabelUrl ? (
                      <img
                        className={cx('image-container')}
                        src={cell.row.original.sourceZoneLabelUrl}
                        alt=""
                      />
                    ) : (
                      <div className={cx('image-empty')} />
                    )}
                    <span className={cx('text-container')}>
                      {cell.row.original.sourceZoneReadableName}
                    </span>
                    <Status isZoneUpToDate={cell.row.original.isZoneUpToDate} />
                  </div>
                  <div className={cx('zoneInfoHeader')}>
                    {cell.row.original.zoneCounterpartyLabelUrl ? (
                      <img
                        className={cx('image-container')}
                        src={cell.row.original.zoneCounterpartyLabelUrl}
                        alt=""
                      />
                    ) : (
                      <div className={cx('image-empty')} />
                    )}
                    <span className={cx('text-container')}>
                      {cell.row.original.name}
                    </span>
                    <Status
                      isZoneUpToDate={
                        cell.row.original.isZoneCounterpartyUpToDate
                      }
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className={cx('cell-container')}>
              <div className={cx('expandArrowContainer')}>
                <ArrowDown className={cx('expandArrow')} />
              </div>
              {cell.row.original.zoneCounterpartyLabelUrl ? (
                <img
                  className={cx('image-container')}
                  src={cell.row.original.zoneCounterpartyLabelUrl}
                  alt=""
                />
              ) : (
                <div className={cx('image-empty')} />
              )}
              <span className={cx('text-container')}>
                {cell.render('Cell')}
              </span>
              <Status
                isZoneUpToDate={cell.row.original.isZoneCounterpartyUpToDate}
              />
            </div>
          );
        }

        return (
          <div className={cx('cell-container', 'channelIdContainer')}>
            <div className={cx('channelIndex')}>{cell.row.index + 1}</div>
            <div>{cell.row.original.channelId || '--'}</div>
            <div className={cx('channelLineContainer')}>
              <div
                className={cx('dot', {
                  opened: cell.row.original.isOpened,
                })}
              />
              <div
                className={cx('line', {
                  opened: cell.row.original.isOpened,
                })}
              />
              <div
                className={cx('dot', {
                  opened: cell.row.original.isOpened,
                })}
              />
            </div>
            <div className={cx('zoneCounterpartyChannelId')}>
              {cell.row.original.zoneCounterpartyChannelId || '--'}
            </div>
          </div>
        );
      }
      default: {
        const diff = cell.row.original[cell.column.diffAccessor];
        const DiffCell = cell.column.Cell;

        return (
          <span className={cx('text-container')}>
            {cell.render('Cell')}
            {isNumber(diff) && (
              <div
                className={cx('shift-tooltip', {
                  negative: diff < 0,
                })}
              >
                <DiffCell cell={cell} value={diff > 0 ? '+' + diff : diff} />
              </div>
            )}
          </span>
        );
      }
    }
  };

  return (
    <div id="table-container" className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        <Thead headerGroups={headerGroups} onHeaderClick={() => {}} />
        <tbody
          {...getTableBodyProps()}
          className={cx({ bodyWithFocus: !!focusedZoneId })}
        >
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                className={cx('row')}
                onClick={() => {
                  if (row.canExpand) {
                    row.toggleRowExpanded();
                  }

                  focusZone(row.original);
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={cx('cell', cell.column.id, {
                        ibcReceived: cell.column.id === 'ibc_tx_success',
                        ibcSent: cell.column.id === 'ibc_tx_failed',
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
