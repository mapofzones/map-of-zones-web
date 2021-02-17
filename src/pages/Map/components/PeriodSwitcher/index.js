import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import { trackEvent } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const PERIODS = [
  {
    hours: 24,
    step: 1,
    name: (
      <FormattedMessage
        id="period-hours"
        defaultMessage="{period}h"
        values={{ period: 24 }}
      />
    ),
    rawText: '24h',
  },
  {
    hours: 168,
    step: 7,
    name: (
      <FormattedMessage
        id="period-days"
        defaultMessage="{period}d"
        values={{ period: 7 }}
      />
    ),
    rawText: '7d',
  },
  {
    hours: 720,
    step: 30,
    name: (
      <FormattedMessage
        id="period-days"
        defaultMessage="{period}d"
        values={{ period: 30 }}
      />
    ),
    rawText: '30d',
  },
];

function PeriodSwitcher({ hours, onChange }) {
  const onPeriodChange = useCallback(
    period => {
      onChange(period);
      trackEvent({
        category: 'Map',
        action: 'change period',
        label: period.rawText,
      });
    },
    [onChange],
  );

  return (
    <div className={cx('container')}>
      {PERIODS.map(period => (
        <button
          type="button"
          key={period.hours}
          className={cx('period', { selected: period.hours === hours })}
          onClick={() => onPeriodChange(period)}
        >
          <span>{period.name}</span>
        </button>
      ))}
    </div>
  );
}

PeriodSwitcher.propTypes = {
  hours: PropTypes.number,
  onChange: PropTypes.func,
};

PeriodSwitcher.defaultProps = {
  hours: PERIODS[0].hours,
  onChange: () => {},
};

export default PeriodSwitcher;
