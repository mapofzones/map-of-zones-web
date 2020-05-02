import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { roundNumber, formatPercentage } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function NodeTooltip({ node, period }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  let mapTooltip = document.querySelector('.graph-tooltip');

  return (
    <div
      className={cx('node-custom-tooltip', { active: isActive })}
      style={{
        borderTop: `4px solid ${node.color}`,
        left: (parseInt(mapTooltip.style.left) + 15) + 'px',
        top: (parseInt(mapTooltip.style.top) + 15) + 'px',
      }}
    >
      <div className={cx('header-row')}>
        <div className={cx('item-text')}>{node.name}</div>
        <div className={cx('key-text')}>{period}</div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>Connects</div>
          <div className={cx('item-text')}>{node.channels}</div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>Overall txs</div>
          <div className={cx('item-text')}>{node.totalTxs}</div>
        </div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC All</div>
          <div className={cx('item-text')}>{node.totalIbcTxs}</div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>% IBC</div>
          <div className={cx('item-text')}>
            {roundNumber(node.ibcPercentage, 2)}
          </div>
        </div>
      </div>
      <div className={cx('row-tooltip')}>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC Sent</div>
          <div className={cx('item-text')}>{node.ibcSent}</div>
          <div className={cx('item-text', 'sent-title')}>
            {formatPercentage(node.ibcSentPercentage, 2)}
          </div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>IBC received</div>
          <div className={cx('item-text')}>{node.ibcReceived}</div>
          <div className={cx('item-text', 'received-title')}>
            {formatPercentage(node.ibcReceivedPercentage, 2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NodeTooltip;
