import React from 'react';
import classNames from 'classnames/bind';
import { useTable, useSortBy } from 'react-table';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Leaderboard({ columns, data, toggleTableOpen }) {
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

  const headerWithSort = (id) => {
    switch (id) {
      case 'totalTxs':
      case 'totalIbcTxs':
      case 'ibcSent':
      case 'ibcReceived':
        return true;
      default:
        return false;
    }
  };
  const headerWithExplanation = (id) => {
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

  const renderCell = (cell) => {
    switch (cell.column.id) {
      case 'txsActivity':
        return cell.render('Cell');
      case 'name':
        return (
          <div className={cx('cell-container')}>
            <span className={cx('text-container')}>
              {cell.render('Cell')}
            </span>
            <span className={cx('position-shift',
              {negative: cell.row.id%20 - 10 < 0},
              {new: cell.row.id%20 - 10 === 0})}>

              {cell.row.id%20 - 10 !== 0 ?
                cell.row.id%20 - 10 :
                <div>NEW</div>
              }
            </span>
          </div>
        );

      default:
        return <span className={cx('text-container')}>
                 {cell.render('Cell')}

                {headerWithSort(cell.column.id) &&
                <div className={cx('shift-tooltip', {negative:cell.value - cell.row.values.ibcReceived < 0})}>
                  {cell.value - cell.row.values.ibcReceived > 0
                    ? "+" + cell.value - cell.row.values.ibcReceived
                    : cell.value - cell.row.values.ibcReceived}
                </div>}
               </span>
    }
  };

  const firstPageRows = rows.slice(0, 20);

  return (
    <div className={cx('table-container')}>
      <table {...getTableProps()} className={cx('table')}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (

                <th
                  {...column.getHeaderProps(
                    headerWithSort(column.id)
                      ? column.getSortByToggleProps()
                      : undefined,
                  )}
                  className={cx('header', column.id, {sortedColumn: column.isSorted})}
                >
                  <div className={cx('header-container')}>
                    <div className={cx('IBC-circle',  column.id)}/>

                    {column.render('Header')}

                    {headerWithExplanation(column.id) &&
                    <div className={cx('explanation-icon')}>
                      ?
                      <div className={cx('explanation-tooltip',
                        {centerPos:column.id === 'channels' || column.id === 'ibcReceived'})}>
                       {column.descr}
                      </div>
                    </div>
                    }

                    {/*{column.isSorted ? (*/}
                    {headerWithSort(column.id) ? (
                      <div className={cx('sort-arrow-wrapper')}>
                        <ArrowDown />
                        <ArrowDown />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>

                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={cx('row')}
                  onClick={()=>toggleTableOpen('open')}>
                {row.cells.map(cell => {
                  return (
                    <td
                      onClick={()=>{console.log(cell)}}
                      {...cell.getCellProps()}
                      className={cx('cell', cell.column.id, {sortedColumn: cell.column.isSorted})}
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

export default Leaderboard;
