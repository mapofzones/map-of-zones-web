import React from 'react';
import classNames from 'classnames/bind';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function TotalStatTable({ ibcTxsActivity, period, ibcTxs }) {
  return (
    <div className={cx('container')}>
      <div className={cx('item')}>
        <ResponsiveContainer>
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
        <div className={cx('statContainer')}>
          <div className={cx('statName')}>Number of IBC TXS ({period})</div>
          <div className={cx('statValue')}>{ibcTxs}</div>
        </div>
      </div>
      <div className={cx('item')} />
      <div className={cx('item')} />
      <div className={cx('item')} />
    </div>
  );
}

export default TotalStatTable;
