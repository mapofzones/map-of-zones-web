import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy } from 'react-table';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';
import columns from './config';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Leaderboard({
  data,
  toggleTableOpen,
  onSortChange,
  initialState,
  disableMultiSort,
  disableSortRemove,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState,
      disableMultiSort,
      disableSortRemove,
    },
    useSortBy,
  );

  const sortedColumn = state?.sortBy?.[0]?.id;

  useEffect(() => onSortChange(sortedColumn), [sortedColumn, onSortChange]);

  const headerWithExplanation = id => {
    switch (id) {
      case 'totalTxs':
      case 'totalIbcTxs':
      case 'ibcSent':
      case 'ibcReceived':
      case 'channels':
        return true;
      default:
        return false;
    }
  };

  const renderCell = cell => {
    switch (cell.column.id) {
      case 'txsActivity':
        return cell.render('Cell');
      case 'name':
        return (
          <div className={cx('cell-container')}>
            <span className={cx('text-container')}>{cell.render('Cell')}</span>
            <span
              className={cx(
                'position-shift',
                { negative: (cell.row.id % 20) - 10 < 0 },
                { new: (cell.row.id % 20) - 10 === 0 },
              )}
            >
              {(cell.row.id % 20) - 10 !== 0 ? (
                (cell.row.id % 20) - 10
              ) : (
                <div>NEW</div>
              )}
            </span>
          </div>
        );
      default:
        return (
          <span className={cx('text-container')}>
            {cell.render('Cell')}
            {!cell.column.disableSortBy && (
              <div
                className={cx('shift-tooltip', {
                  negative: cell.value - cell.row.values.ibcReceived < 0,
                })}
              >
                {cell.value - cell.row.values.ibcReceived > 0
                  ? '+' + cell.value - cell.row.values.ibcReceived
                  : cell.value - cell.row.values.ibcReceived}
              </div>
            )}
          </span>
        );
    }
  };

  return (
    <div className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={cx('header', column.id, {
                    sortedColumn: column.isSorted,
                  })}
                >
                  <div className={cx('header-container')}>
                    <div className={cx('IBC-circle', column.id)} />
                    {column.render('Header')}
                    {headerWithExplanation(column.id) && (
                      <div className={cx('explanation-icon')}>
                        ?
                        <div
                          className={cx('explanation-tooltip', {
                            centerPos:
                              column.id === 'channels' ||
                              column.id === 'ibcReceived',
                          })}
                        >
                          {column.descr}
                        </div>
                      </div>
                    )}
                    {!column.disableSortBy && (
                      <div className={cx('sortArrowWrapper')}>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ArrowDown className={cx('arrow')} />
                          ) : (
                            <ArrowDown className={cx('arrow', 'arrowUp')} />
                          )
                        ) : (
                          <div>
                            <ArrowDown className={cx('arrow', 'arrowUp')} />
                            <ArrowDown className={cx('arrow')} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={cx('row')}
                onClick={() => toggleTableOpen('open')}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      onClick={() => {
                        console.log(cell);
                      }}
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
  toggleTableOpen: PropTypes.func,
  initialState: PropTypes.object,
  disableMultiSort: PropTypes.bool,
  disableSortRemove: PropTypes.bool,
};

Leaderboard.defaultProps = {
  onSortChange: () => {},
  toggleTableOpen: () => {},
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
};

export default Leaderboard;
