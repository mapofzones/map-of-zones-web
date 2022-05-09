import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import animate from 'animate.css';

import { formatNumber, trackEvent, isNumber } from 'common/helper';
import { useMobileSize } from 'common/hooks';
import Status from 'components/Status';
import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';

import Thead from './Thead';
import SortModal from './SortModal';

import columnsConfig from './config';

import styles from './index.module.css';

const cx = classNames.bind({ ...animate, ...styles });

function Leaderboard({
  data,
  disableMultiSort,
  disableSortRemove,
  focusedZoneId,
  handleScroll,
  initialState,
  isTableOpened,
  onSortChange,
  period,
  setFocusedZone,
}) {
  const globalFilter = useCallback(
    (rows, columnIds, filterValue) => filterValue(rows),
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
    setHiddenColumns,
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

  const sortBy = useMemo(() => state?.sortBy?.[0], [state]);
  const initialSortBy = useMemo(() => initialState?.sortBy?.[0], [
    initialState,
  ]);
  const sortedColumn = columns.find(({ isSorted }) => isSorted);

  useEffect(() => {
    onSortChange({ id: sortBy.id, desc: sortBy.desc });
  }, [sortBy.id, sortBy.desc, onSortChange]);

  useEffect(() => {
    if (sortBy !== initialSortBy && sortedColumn) {
      trackEvent({
        category: 'Table',
        action: 'sort',
        label: sortedColumn.id,
        extra: { direction: sortBy?.desc ? 'desc' : 'asc' },
      });
    }
  }, [initialSortBy, sortBy, sortedColumn]);

  const renderCell = cell => {
    switch (cell.column.id) {
      case 'blank':
        return <div>-</div>;
      case 'txsActivity':
        return cell.render('Cell');
      case 'zoneLabelUrl': {
        return (
          <div className={cx('cell-container', 'cell-image-container')}>
            {cell.row.original.zoneLabelUrl ? (
              <img
                className={cx('image-container')}
                src={cell.row.original.zoneLabelUrl}
                alt=""
              />
            ) : (
              <div className={cx('image-empty')} />
            )}
          </div>
        );
      }
      case 'name': {
        return (
          <div className={cx('cell-container')}>
            <span className={cx('text-container')}>{cell.render('Cell')}</span>
            <Status isZoneUpToDate={cell.row.original.isZoneUpToDate} />
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
      }
      default: {
        const value = cell.row.original[cell.column.id];
        const diff = cell.row.original[cell.column.diffAccessor];
        const pending = cell.row.original[cell.column.pendingAccessor];

        return (
          <span
            className={cx('text-container', {
              numeric: typeof cell.value === 'number',
            })}
          >
            {cell.render('Cell', { itemValue: value })}
            {isNumber(diff) && (
              <div
                className={cx('shift-tooltip', {
                  negative: diff < 0,
                })}
              >
                {cell.render('Cell', { itemValue: diff })}
              </div>
            )}
            {isNumber(pending) && (
              <div className={cx('pendingContainer')}>
                <PendingIcon className={cx('pendingIcon')} />
                {cell.render('Cell', { itemValue: pending })}
              </div>
            )}
          </span>
        );
      }
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

  const isMobile = useMobileSize();

  const [selectedColumnIndex, updateSelectedColumnIndex] = useState(0);

  const [isSortModalOpened, setSortModalOpened] = useState(false);

  const hiddenColumns = useMemo(
    () => columns.filter(({ alwaysVisible }) => !alwaysVisible),
    [columns],
  );

  const hiddenColumnsHeaders = useMemo(
    () => hiddenColumns.map(({ Header, id }) => ({ id, value: Header })),
    [hiddenColumns],
  );

  const onHeaderClick = useCallback(
    e => {
      if (isMobile) {
        e.stopPropagation();
        setSortModalOpened(true);
      }
    },
    [setSortModalOpened, isMobile],
  );

  useEffect(() => {
    if (isMobile) {
      const hiddenColumnsIds = hiddenColumns.map(({ id }) => id);

      setHiddenColumns(
        [
          ...hiddenColumnsIds.slice(0, selectedColumnIndex),
          ...hiddenColumnsIds.slice(
            selectedColumnIndex + 1,
            hiddenColumnsIds.length,
          ),
        ],
        true,
      );
    } else {
      setHiddenColumns([], true);
    }
  }, [setHiddenColumns, hiddenColumns, isMobile, selectedColumnIndex]);

  useEffect(() => {
    if (isMobile && columns[selectedColumnIndex + 3]?.toggleSortBy) {
      columns[selectedColumnIndex + 3].toggleSortBy(false, false);
    }
  }, [columns, selectedColumnIndex, isMobile]);

  return (
    <div className="table-wrap">
      <div
        onScroll={handleScroll}
        id="table-container"
        className={cx('table-container', { fixedTable: isTableOpened })}
      >
        <table
          {...getTableProps()}
          className={cx(
            'table',
            { bodyWithFocus: !!focusedZoneId },
            { focusFixed: !!focusedZoneId && isTableOpened === 'fixed-thead' },
          )}
        >
          <Thead
            headerGroups={headerGroups}
            onHeaderClick={onHeaderClick}
            period={period.rawText}
          />
          <tbody
            {...getTableBodyProps()}
            className={cx(
              { bodyWithFocus: !!focusedZoneId },
              {
                focusFixed: !!focusedZoneId && isTableOpened === 'fixed-thead',
              },
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
        <SortModal
          isOpen={isSortModalOpened}
          onRequestClose={() => setSortModalOpened(false)}
          data={hiddenColumnsHeaders}
          selectedIndex={selectedColumnIndex}
          updateSelection={index => {
            updateSelectedColumnIndex(index);
            setSortModalOpened(false);
          }}
        />
      </div>
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
  period: PropTypes.shape({
    hours: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.node,
    rawText: PropTypes.string,
  }),
};

Leaderboard.defaultProps = {
  onSortChange: () => {},
  disableMultiSort: true,
  disableSortRemove: true,
  setFocusedZone: () => {},
  filter: rows => rows,
};

export default Leaderboard;
