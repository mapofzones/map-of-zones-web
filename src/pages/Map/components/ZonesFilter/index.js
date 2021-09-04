import React, { useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';

import Modal from 'components/Modal';

import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as ArrowUptrend } from 'assets/images/arrow-uptrend.svg';
import { ReactComponent as ArrowDowntrend } from 'assets/images/arrow-downtrend.svg';

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

export const TREND_LINE = [
  {
    label: '',
    value: null,
  },
  {
    label: (
      <div className={cx('trendLineContainer')}>
        <FormattedMessage id="trend-line-uptrend" defaultMessage="Uptrend" />
        <ArrowUptrend className={cx('trendLineArrow')} />
      </div>
    ),
    value: 'asc',
  },
  {
    label: (
      <div className={cx('trendLineContainer')}>
        <FormattedMessage
          id="trend-line-downtrend"
          defaultMessage="Downtrend"
        />
        <ArrowDowntrend className={cx('trendLineArrow')} />
      </div>
    ),
    value: 'desc',
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
  sortOrder: null,
  filterAmount: null,
  trendLine: null,
};

function ZonesFilter({ currentFilter, applyFilter, isOpen, onRequestClose }) {
  const [sortOrder, setSortOrder] = useState(currentFilter.sortOrder);
  const [filterAmount, seFilterAmount] = useState(currentFilter.filterAmount);
  const [trendLine, setTrendLine] = useState(currentFilter.trendLine);
  const clearFilter = useCallback(() => {
    setSortOrder(initialFilter.sortOrder);
    seFilterAmount(initialFilter.filterAmount);
    setTrendLine(initialFilter.trendLine);
    applyFilter({
      sortOrder: initialFilter.sortOrder,
      filterAmount: initialFilter.filterAmount,
      trendLine: initialFilter.trendLine,
    });
  }, [setSortOrder, seFilterAmount, setTrendLine, applyFilter]);
  const selectedSortOrder = useMemo(
    () => SORT_ORDER.find(({ value }) => value === sortOrder),
    [sortOrder],
  );
  const selectedFilterAmount = useMemo(
    () => FILTER_AMOUNT.find(({ value }) => value === filterAmount),
    [filterAmount],
  );
  const selectedTrendLine = useMemo(
    () => TREND_LINE.find(({ value }) => value === trendLine),
    [trendLine],
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
            id="zones-filter-subtitle-activity"
            defaultMessage="Activity"
          />
        </div>
        <Select
          value={selectedSortOrder}
          onChange={({ value }) => setSortOrder(value)}
          options={SORT_ORDER}
          className={cx('dropdown')}
        />
        {sortOrder && (
          <Select
            value={selectedFilterAmount}
            onChange={({ value }) => seFilterAmount(value)}
            options={FILTER_AMOUNT}
            className={cx('dropdown')}
          />
        )}
        <div className={cx('subtitle')}>
          <FormattedMessage
            id="zones-filter-subtitle-trend-line"
            defaultMessage="Trendline"
          />
        </div>
        <Select
          value={selectedTrendLine}
          onChange={({ value }) => setTrendLine(value)}
          options={TREND_LINE}
          className={cx('dropdown')}
        />
      </div>
      <button
        type="button"
        className={cx('applyButton')}
        onClick={() => applyFilter({ sortOrder, filterAmount, trendLine })}
        disabled={
          trendLine === currentFilter.trendLine &&
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
