import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTable, useSortBy } from 'react-table';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';
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
  focusedZoneName
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

  useEffect( () => {
    let table = document.documentElement.querySelector('table');
    window.addEventListener('scroll', ()=>handleScroll(table) );

    return window.removeEventListener('scroll', ()=>handleScroll(table) );
  }, []);

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
            {cell.row.original[sortedColumn.id+'RatingDiff'] !== 0 &&
            <span
              className={cx(
                'position-shift',
                { negative: cell.row.original[sortedColumn.id+'RatingDiff'] < 0 }
              )}
            >
              {cell.row.original[sortedColumn.id+'RatingDiff']}
            </span>}
          </div>
        );
      default:
        return (
          <span className={cx('text-container')}>
            {cell.render('Cell')}
            {!cell.column.disableSortBy && (
              <div
                className={cx('shift-tooltip', {
                  negative: cell.row.original[cell.column.id+'Diff'] < 0,
                })}
              >
                {cell.row.original[cell.column.id+'Diff'] > 0
                  ? '+' + cell.row.original[cell.column.id+'Diff']
                  : cell.row.original[cell.column.id+'Diff']}
              </div>
            )}
          </span>
        );
    }
  };

  return (
    <div className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        {/* TODO: Add thead component*/}
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

        <thead className={cx('fixed', {active:(isTableOpened === 'fixed-thead')})}>
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
        <tbody {...getTableBodyProps()}
        className={cx({bodyWithFocus:focusedZoneName},
          {focusFixed:(focusedZoneName && isTableOpened === 'fixed-thead')})}>

          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={cx('row',
                  {focusedRow:row.original.name === focusedZoneName},
                  {fixed:(row.original.name === focusedZoneName && isTableOpened === 'fixed-thead')}) }

                onClick={() => {setFocusedZone(row.original)}}
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
};

export default Leaderboard;

