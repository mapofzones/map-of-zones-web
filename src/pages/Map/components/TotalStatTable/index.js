import React from 'react';
import classNames from 'classnames/bind';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function TotalStatTable({ ibcTxsActivity }) {
  return (
    <div className={cx('container')}>
      <ResponsiveContainer className={cx('item')}>
        <AreaChart data={ibcTxsActivity} margin={{ bottom: 0 }}>
          <Area
            strokeWidth={2}
            type="linear"
            dataKey="tx"
            stroke="#6ea77f"
            fill="#5CA97B"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className={cx('item')} />
      <div className={cx('item')} />
      <div className={cx('item')} />
    </div>
  );
}

export default TotalStatTable;
