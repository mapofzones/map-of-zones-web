import React from 'react';
import classNames from 'classnames/bind';
import styles from '../index.module.css';

const cx = classNames.bind(styles);

const TableRow = ({ row, isPinned, focusZone, renderCell }) => {
  return (
    <tr
      {...row.getRowProps()}
      className={cx('row', { pinnedRow: isPinned })}
      onClick={() => {
        focusZone(row.original);
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
};

export default TableRow;
