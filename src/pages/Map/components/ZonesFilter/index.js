import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as ArrowTop } from 'assets/images/arrow-top.svg';

import PeriodSwitcher from '../PeriodSwitcher';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function ZonesFilter({
  hours,
  setPeriod,
  className,
  isTableOpened,
  toggleTableOpen,
}) {
  return (
    <div className={cx('container', className)}>
      <div />
      {isTableOpened ? (
        <button
          type="button"
          className={cx('closeTableButton')}
          onClick={toggleTableOpen}
        >
          <ArrowTop className={cx('arrowTop')} />
          <FormattedMessage
            id="back-to-map-title"
            defaultMessage="Back to Map"
          />
        </button>
      ) : (
        <PeriodSwitcher hours={hours} onChange={setPeriod} />
      )}
    </div>
  );
}

ZonesFilter.propTypes = {
  hours: PropTypes.number,
  setPeriod: PropTypes.func,
  className: PropTypes.string,
  isTableOpened: PropTypes.bool,
  toggleTableOpen: PropTypes.func,
};

export default ZonesFilter;
