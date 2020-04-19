import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import PeriodSwitcher from '../PeriodSwitcher';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function ZonesFilter({ hours, setPeriod }) {
  return (
    <div className={cx('container')}>
      <div />
      <PeriodSwitcher hours={hours} onChange={setPeriod} />
    </div>
  );
}

ZonesFilter.propTypes = {
  hours: PropTypes.number,
  setPeriod: PropTypes.func,
};

export default ZonesFilter;
