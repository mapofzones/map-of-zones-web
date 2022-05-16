import React from 'react';
import PropTypes from 'prop-types';
import { isNumber } from 'common/helper';
import Status from 'components/Status';
import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';

import classNames from 'classnames/bind';
import styles from './TableCell.module.css';

const cx = classNames.bind(styles);

const TableCell = ({ cell, sortedColumnId }) => {
  return (
    <td
      {...cell.getCellProps()}
      className={cx('cell', cell.column.id, {
        sortedColumn: cell.column.isSorted,
      })}
    >
      <CellData cell={cell} sortedColumnId={sortedColumnId} />
    </td>
  );
};

export default TableCell;

TableCell.propTypes = {
  cell: PropTypes.object,
  sortedColumnId: PropTypes.string,
};

TableCell.defaultProps = {
  cell: {},
  sortedColumnId: '',
};

const CellData = ({ cell, sortedColumnId }) => {
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
          {cell.row.original[sortedColumnId + 'RatingDiff'] !== 0 && (
            <span
              className={cx('position-shift', {
                negative: cell.row.original[sortedColumnId + 'RatingDiff'] < 0,
              })}
            >
              {cell.row.original[sortedColumnId + 'RatingDiff']}
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
