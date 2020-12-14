import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

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

const initialFilter = {
  sortOrder: SORT_ORDER[0].sortBy,
  filterAmount: FILTER_AMOUNT[0].amount,
};

function ZonesFilter({ currentFilter, applyFilter, isOpen, onRequestClose }) {
  const [sortOrder, setSortOrder] = useState(currentFilter.sortOrder);
  const [filterAmount, seFilterAmount] = useState(currentFilter.filterAmount);
  const clearFilter = useCallback(() => {
    setSortOrder(initialFilter.sortOrder);
    seFilterAmount(initialFilter.filterAmount);
    applyFilter({
      sortOrder: initialFilter.sortOrder,
      filterAmount: initialFilter.filterAmount,
    });
  }, [setSortOrder, seFilterAmount, applyFilter]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={cx('overlay')}
      className={cx('content')}
    >
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
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
          <button
            type="button"
            onClick={onRequestClose}
            className={cx('closeButton')}
          >
            <CloseIcon />
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
                className={cx('amount', {
                  selected: amount === filterAmount,
                })}
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
          sortOrder === currentFilter.sortOrder &&
          (filterAmount === currentFilter.filterAmount || !sortOrder)
        }
      >
        <FormattedMessage id="apply-button-title" defaultMessage="Apply" />
      </button>
    </Modal>
  );
}

ZonesFilter.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  applyFilter: PropTypes.func,
  currentFilter: PropTypes.object,
};

ZonesFilter.defaultProps = {
  applyFilter() {},
  currentFilter: initialFilter,
};

export default ZonesFilter;
