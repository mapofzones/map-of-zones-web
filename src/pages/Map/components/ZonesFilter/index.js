import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';

import Modal from 'components/Modal';

import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const SORT_ORDER = [
  {
    label: <FormattedMessage id="order-default" defaultMessage="All" />,
    value: null,
  },
  {
    label: <FormattedMessage id="order-desc" defaultMessage="Most Active" />,
    value: 'desc',
  },
  {
    label: <FormattedMessage id="order-asc" defaultMessage="Least Active" />,
    value: 'asc',
  },
];

export const FILTER_AMOUNT = [
  {
    label: (
      <FormattedMessage
        id="filter-amount"
        defaultMessage="Top {amount}"
        values={{ amount: 50 }}
      />
    ),
    value: 50,
  },
  {
    label: (
      <FormattedMessage
        id="filter-amount"
        defaultMessage="Top {amount}"
        values={{ amount: 20 }}
      />
    ),
    value: 20,
  },
  {
    label: (
      <FormattedMessage
        id="filter-amount"
        defaultMessage="Top {amount}"
        values={{ amount: 10 }}
      />
    ),
    value: 10,
  },
];

const initialFilter = {
  sortOrder: SORT_ORDER[0].value,
  filterAmount: FILTER_AMOUNT[0].value,
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
  const selectedSortOrder = SORT_ORDER.find(({ value }) => value === sortOrder);
  const selectedFilterAmount = FILTER_AMOUNT.find(
    ({ value }) => value === filterAmount,
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentClassName={cx('content')}
      animations={{
        afterOpen: 'animate__slideInRight',
        beforeClose: 'animate__slideOutRight',
        overlayAfterOpen: 'overlayFadeIn',
        overlayBeforeClose: 'overlayFadeOut',
      }}
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
          <FormattedMessage
            id="zones-filter-subtitle"
            defaultMessage="Activity"
          />
        </div>
        <Select
          value={selectedSortOrder}
          onChange={({ value }) => setSortOrder(value)}
          options={SORT_ORDER}
          className={cx('sortOrderDropdown')}
        />
        {sortOrder && (
          <Select
            value={selectedFilterAmount}
            onChange={({ value }) => seFilterAmount(value)}
            options={FILTER_AMOUNT}
          />
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
