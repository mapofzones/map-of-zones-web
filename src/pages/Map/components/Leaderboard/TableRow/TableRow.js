import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TableCell from '../TableCell/TableCell';

import styles from './TableRow.module.css';
const cx = classNames.bind(styles);

const TableRow = ({ row, isPinned, sortedColumnId, focusZone, prepareRow }) => {
  prepareRow(row);
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
          <TableCell
            key={cell.column.id}
            cell={cell}
            sortedColumnId={sortedColumnId}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  row: PropTypes.object,
  isPinned: PropTypes.bool,
  focusZone: PropTypes.func,
  sortedColumnId: PropTypes.string,
};

TableRow.defaultProps = {
  row: {},
  isPinned: false,
  focusZone: () => {},
  sortedColumnId: '',
};
