import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { formatNumber, formatPercentage } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function NodeTooltip({ node, period }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  let mapTooltip =
    document.querySelector('.graph-tooltip') ||
    document.querySelector('.scene-tooltip');

  if (!mapTooltip) {
    return null;
  }

  return (
    <div
      className={cx('custom-tooltip', 'node-custom-tooltip', {
        active: isActive,
      })}
      style={{
        borderTop: `4px solid ${node.color}`,
        left: parseInt(mapTooltip.style.left) + 15 + 'px',
        top: parseInt(mapTooltip.style.top) + 15 + 'px',
      }}
    >
      <div className={cx('header-row')}>
        <div className={cx('item-text')}>{node.name}</div>
        <div className={cx('key-text', 'period-title')}>{period}</div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>Channels</div>
          <div className={cx('item-text')}>{formatNumber(node.channels)}</div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>Total TXs</div>
          <div className={cx('item-text')}>{formatNumber(node.totalTxs)}</div>
        </div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC transfers</div>
          <div className={cx('item-text')}>
            {formatNumber(node.totalIbcTxs)}
          </div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC share %</div>
          <div className={cx('item-text')}>
            {formatPercentage(node.ibcPercentage)}
          </div>
        </div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC out</div>
          <div className={cx('item-text')}>{formatNumber(node.ibcSent)}</div>
          <div className={cx('item-text', 'sent-title')}>
            {formatPercentage(node.ibcSentPercentage)}
          </div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC in</div>
          <div className={cx('item-text')}>
            {formatNumber(node.ibcReceived)}
          </div>
          <div className={cx('item-text', 'received-title')}>
            {formatPercentage(node.ibcReceivedPercentage)}
          </div>
        </div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>
            IBC Out
            <br />
            Failed
          </div>
          <div className={cx('item-text')}>
            {formatNumber(node.ibcTxFailed)}
          </div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>
            IBC in
            <br />
            Failed
          </div>
          <div className={cx('item-text')}>
            {formatNumber(node.ibcTxFailed)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NodeTooltip;
