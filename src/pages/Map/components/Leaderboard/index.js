import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import animate from 'animate.css';

import { trackEvent } from 'common/helper';
import { useMobileSize } from 'common/hooks';

import Thead from './Thead';
import TableRow from './TableRow/TableRow';
import SortModal from './SortModal';

import columnsConfig from './config';

import styles from './index.module.css';

const cx = classNames.bind({ ...animate, ...styles });

function Leaderboard({
  data,
  disableMultiSort,
  disableSortRemove,
  focusedZoneId,
  initialState,
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

  const focusZone = useCallback(
    zone => {
      setFocusedZone(zone);

      trackEvent({
        category: 'Table',
        action: 'select zone',
        label: zone.name,
        extra: { period: period?.rawText },
      });
    },
    [setFocusedZone, period],
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

  const pinnedRow = useMemo(() => {
    if (focusedZoneId) {
      return rows.find(row => row.original.id === focusedZoneId);
    }
    return null;
  }, [focusedZoneId, rows]);

  const simpleRows = useMemo(() => {
    if (focusedZoneId) {
      return rows.filter(row => row.original.id !== focusedZoneId);
    }
    return rows;
  }, [focusedZoneId, rows]);

  return (
    <div id="table-container" className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        <Thead
          headerGroups={headerGroups}
          onHeaderClick={onHeaderClick}
          period={period.rawText}
        />
        <tbody {...getTableBodyProps()}>
          {pinnedRow && (
            <TableRow
              row={pinnedRow}
              isPinned={true}
              focusZone={focusZone}
              sortedColumnId={sortedColumn.id}
              prepareRow={prepareRow}
            />
          )}
          {simpleRows.map((row, i) => {
            return (
              <TableRow
                key={row.original.id}
                row={row}
                isPinned={false}
                focusZone={focusZone}
                sortedColumnId={sortedColumn.id}
                prepareRow={prepareRow}
              />
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
