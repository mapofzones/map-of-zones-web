import React from 'react';
import classNames from 'classnames/bind';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { FormattedMessage } from 'react-intl';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function TotalStatTable({ ibcTxsActivity, period, ibcTxs, zones, channels }) {
  return (
    <div className={cx('container')}>
      <div className={cx('item')}>
        <div className={cx('statContainer')}>
          <div className={cx('statName')}>
            <FormattedMessage
              id="number-of-ibc-txs-stat"
              defaultMessage="Number of IBC TXS ({period})"
              values={{ period }}
            />
          </div>
          <div className={cx('statValue')}>{ibcTxs}</div>
        </div>
        <ResponsiveContainer className={cx('activityContainer')}>
          <AreaChart data={ibcTxsActivity} margin={{ bottom: 0 }}>
            <Area
              strokeWidth={2}
              type="linear"
              dataKey="txs"
              stroke="#6ea77f"
              fill="#5CA97B"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={cx('item')}>
        <div className={cx('statContainer')}>
          <div className={cx('statName')}>
            <FormattedMessage id="zones-stat" defaultMessage="Zones" />
          </div>
          <div className={cx('statValue')}>{zones}</div>
        </div>
      </div>
      <div className={cx('item')}>
        <div className={cx('statContainer')}>
          <div className={cx('statName')}>
            <FormattedMessage id="channels-stat" defaultMessage="Channels" />
          </div>
          <div className={cx('statValue')}>{channels}</div>
        </div>
      </div>
      <div className={cx('item')} />
    </div>
  );
}

export default TotalStatTable;
