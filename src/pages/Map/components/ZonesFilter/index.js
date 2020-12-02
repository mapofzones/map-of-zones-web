import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const SORT_ORDER = [
  {
    text: <FormattedMessage id="order-default" defaultMessage="All" />,
    sortBy: null,
  },
  {
    text: <FormattedMessage id="order-desc" defaultMessage="Most" />,
    sortBy: 'desc',
  },
  {
    text: <FormattedMessage id="order-asc" defaultMessage="Least" />,
    sortBy: 'asc',
  },
];

export const FILTER_AMOUNT = [
  {
    amount: 10,
  },
  {
    amount: 20,
  },
  {
    amount: 30,
  },
];

function ZonesFilter({ className, initialFilter, applyFilter }) {
  const [sortOrder, setSortOrder] = useState(initialFilter.sortOrder);
  const [filterAmount, seFilterAmount] = useState(initialFilter.filterAmount);
  const clearFilter = useCallback(() => {
    setSortOrder(initialFilter.sortOrder);
    seFilterAmount(initialFilter.filterAmount);
  }, [setSortOrder, seFilterAmount, initialFilter]);

  useEffect(() => clearFilter(), [clearFilter]);

  return (
    <div className={cx('container', className)}>
      <div className={cx('wrapper')}>
        <div className={cx('titleContainer')}>
          <div className={cx('title')}>
            <FormattedMessage
              id="zones-filter-title"
              defaultMessage="Filters"
            />
          </div>
          <button
            type="button"
            className={cx('clearButton')}
            onClick={clearFilter}
          >
            <FormattedMessage
              id="zones-filter-clear-button-title"
              defaultMessage="Clear"
            />
          </button>
        </div>
        <div className={cx('subtitle')}>
          <FormattedMessage id="zones-filter-subtitle" defaultMessage="Show" />
        </div>
        <div className={cx('sortOrderContainer')}>
          {SORT_ORDER.map(order => (
            <button
              type="button"
              key={order.sortBy}
              className={cx('sortOrder', {
                selected: order.sortBy === sortOrder,
              })}
              onClick={() => setSortOrder(order.sortBy)}
            >
              {order.text}
            </button>
          ))}
        </div>
        {sortOrder && (
          <div className={cx('amountContainer')}>
            {FILTER_AMOUNT.map(({ amount }) => (
              <button
                type="button"
                key={amount}
                className={cx('amount', { selected: amount === filterAmount })}
                onClick={() => seFilterAmount(amount)}
              >
                {amount}
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        type="button"
        className={cx('applyButton')}
        onClick={() => applyFilter({ sortOrder, filterAmount })}
        disabled={
          sortOrder === initialFilter.sortOrder &&
          filterAmount === initialFilter.filterAmount
        }
      >
        <FormattedMessage id="apply-button-title" defaultMessage="Apply" />
      </button>
    </div>
  );
}

ZonesFilter.propTypes = {
  className: PropTypes.string,
  applyFilter: PropTypes.func,
  initialFilter: PropTypes.object,
};

ZonesFilter.defaultProps = {
  applyFilter() {},
  initialFilter: {
    sortOrder: SORT_ORDER[0].sortBy,
    filterAmount: FILTER_AMOUNT[0].amount,
  },
};

export default ZonesFilter;
