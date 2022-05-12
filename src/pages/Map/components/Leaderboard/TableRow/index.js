import React from 'react';
import classNames from 'classnames/bind';
import styles from '../index.module.css';

import TableCell from '../TableCell';

const cx = classNames.bind(styles);

const TableRow = ({ row, isPinned, focusZone, sortedColumnId }) => {
  return (
    <tr
      {...row.getRowProps()}
      className={cx('row', { pinnedRow: isPinned })}
      onClick={() => {
        focusZone(row.original);
      }}
    >
      {row.cells.map(cell => {
        return <TableCell cell={cell} sortedColumnId={sortedColumnId} />;
      })}
    </tr>
  );
};

export default TableRow;
