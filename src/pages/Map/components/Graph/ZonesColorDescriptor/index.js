import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { getZoneColor } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const NUMBER_OF_COLORS = 50;

const getColors = length =>
  Array.from({ length: length + 1 }, (v, k) =>
    getZoneColor(k * (1 / length)),
  ).reverse();

const colors = getColors(NUMBER_OF_COLORS);

function ZonesColorDescriptor({ className }) {
  return (
    <div className={cx(className)}>
      <div className={cx('circlesContainer')}>
        {colors.map(color => (
          <div
            key={color}
            className={cx('circle')}
            style={{ background: color }}
          />
        ))}
      </div>
      <div className={cx('descriptionsContainer')}>
        <div className={cx('description')} style={{ color: getZoneColor(1) }}>
          <FormattedMessage
            id="mostly-sends-title"
            defaultMessage="Mostly Sends"
          />
        </div>
        <div className={cx('description')} style={{ color: getZoneColor(0) }}>
          <FormattedMessage
            id="mostly-receives-title"
            defaultMessage="Mostly Receives"
          />
        </div>
      </div>
    </div>
  );
}

ZonesColorDescriptor.propTypes = {
  className: PropTypes.string,
};

export default ZonesColorDescriptor;
