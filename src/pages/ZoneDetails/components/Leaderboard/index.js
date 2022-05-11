import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy, useGlobalFilter, useExpanded } from 'react-table';
import { DefaultUndefinedValue } from 'common/constants';
import { isNumber } from 'common/helper';
import Status from 'components/Status';
import { motion } from 'framer-motion/dist/es/index';

import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';

import Thead from './Thead';
import columnsConfig from './config';

import classNames from 'classnames/bind';
import styles from './index.module.css';

const cx = classNames.bind(styles);

function Leaderboard({
  data,
  onSortChange,
  initialState,
  disableMultiSort,
  disableSortRemove,
  onChannelClick,
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

  const transition = useMemo(
    () => ({
      duration: 0.1,
      ease: 'easeInOut',
      type: 'spring',
      damping: 50,
      stiffness: 100,
      mass: 1,
    }),
    [],
  );

  const sortBy = useMemo(() => state?.sortBy?.[0], [state]);
  const onRowClick = useCallback(
    row => {
      if (row.depth !== 0) {
        onChannelClick(row.original);
      }
    },
    [onChannelClick],
  );

  useEffect(() => {
    if (sortBy) {
      onSortChange(sortBy);
    }
  }, [sortBy, onSortChange]);

  useEffect(() => {
    setGlobalFilter(() => rowsToSort => filter(rowsToSort, sortBy));
  }, [setGlobalFilter, filter, sortBy]);

  const renderCell = cell => {
    switch (cell.column.id) {
      case 'position': {
        return cell.render('Cell');
      }
      case 'name': {
        if (cell.row.depth === 0) {
          if (cell.row.isExpanded) {
            return (
              <motion.div
                className={cx('zonesPairContainer')}
                key="zoneExpanded"
                transition={transition}
                initial={{ x: '-50%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <div className={cx('zonesPair')}>
                  <div className={cx('zoneInfoHeader', 'sourceZoneHeader')}>
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
                  <div className={cx('zoneInfoHeader', 'zoneCounterparty')}>
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
                      {cell.row.original.zoneCounterpartyReadableName}
                    </span>
                    <Status
                      isZoneUpToDate={
                        cell.row.original.isZoneCounterpartyUpToDate
                      }
                    />
                  </div>
                </div>
              </motion.div>
            );
          }
          return (
            <motion.div
              className={cx('zonesPairContainer')}
              key="zoneCollapsed"
              transition={transition}
              initial={{ x: '50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className={cx('zonesPair')}>
                <div className={cx('zoneInfoHeader', 'zoneCounterparty')}>
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
                    {cell.row.original.zoneCounterpartyReadableName}
                  </span>
                  <Status
                    isZoneUpToDate={
                      cell.row.original.isZoneCounterpartyUpToDate
                    }
                  />
                </div>
              </div>
            </motion.div>
          );
        }
        return (
          <div className={cx('cell-container', 'channelIdContainer')}>
            <div>
              {cell.row.original.channelId || <i>{DefaultUndefinedValue}</i>}
            </div>
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
              {cell.row.original.zoneCounterpartyChannelId || (
                <i>{DefaultUndefinedValue}</i>
              )}
            </div>
          </div>
        );
      }
      default: {
        const diff = cell.row.original[cell.column.diffAccessor];
        const pending = cell.row.original[cell.column.pendingAccessor];
        const Cell = cell.column.Cell;

        return (
          <span
            className={cx('text-container', {
              numeric: typeof cell.value === 'number',
            })}
          >
            {cell.render('Cell')}
            {isNumber(diff) && (
              <div
                className={cx('shift-tooltip', {
                  negative: diff < 0,
                })}
              >
                <Cell cell={cell} value={diff > 0 ? '+' + diff : diff} />
              </div>
            )}
            {isNumber(pending) && (
              <div className={cx('pendingContainer')}>
                <PendingIcon className={cx('pendingIcon')} />
                <Cell cell={cell} value={pending} />
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
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <motion.tr
                layout
                {...row.getRowProps({
                  transition: transition,
                  initial: { y: -33, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: -33, opacity: 0 },
                })}
                className={cx('row', {
                  expanded: row.isExpanded,
                  subrow: row.depth > 0,
                })}
                onClick={() => {
                  if (row.canExpand) {
                    row.toggleRowExpanded();
                  }

                  onRowClick(row);
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={cx('cell', cell.column.className, {
                        sortedColumn: cell.column.isSorted,
                      })}
                    >
                      {renderCell(cell)}
                    </td>
                  );
                })}
              </motion.tr>
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
  onChannelClick: PropTypes.func,
  filter: PropTypes.func,
};

Leaderboard.defaultProps = {
  onSortChange: () => {},
  initialState: {},
  disableMultiSort: true,
  disableSortRemove: true,
  onChannelClick: () => {},
  filter: rows => rows,
};

export default Leaderboard;
