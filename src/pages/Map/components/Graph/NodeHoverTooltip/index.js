import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { getZoneColor } from 'common/helper';

import styles from './index.module.css';
const cx = classNames.bind(styles);


function NodeTooltip({ node }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    setIsActive(true);
  });

  let mapTooltip = document.querySelector('.graph-tooltip');

  return (
      <div className={cx('node-custom-tooltip', {active:isActive})}
           style={{
             borderTop:`4px solid ${getZoneColor(node['sentPercentage'])}`,
             left: mapTooltip.style.left,
             top: mapTooltip.style.top
           }}>
        <div className={cx('header-row')}>
          <div className={cx('item-text')}>Double Ways</div>
          <div className={cx('key-text')}>24h</div>
        </div>

        <div className={cx('row-tooltip')}>
          <div className={cx('col')}>
            <div className={cx('key-text')}>Connects</div>
            <div className={cx('item-text')}>13</div>
          </div>
          <div className={cx('col')}>
            <div className={cx('key-text')}>Overall txs</div>
            <div className={cx('item-text')}>12 349</div>
          </div>
        </div>

        <div className={cx('row-tooltip')}>
          <div className={cx('col')}>
            <div className={cx('key-text')}>IBC All</div>
            <div className={cx('item-text')}>12 349</div>
          </div>
          <div className={cx('col')}>
            <div className={cx('key-text')}>% IBC</div>
            <div className={cx('item-text')}>64</div>
          </div>
        </div>

        <div className={cx('row-tooltip')}>
          <div className={cx('col')}>
            <div className={cx('key-text')}>IBC Sent</div>
            <div className={cx('item-text')}>12 349</div>
            <div className={cx('item-text', 'sent-title')}>34%</div>
          </div>
          <div className={cx('col')}>
            <div className={cx('key-text')}>IBC received</div>
            <div className={cx('item-text')}>10 235</div>
            <div className={cx('item-text', 'received-title')}>66%</div>
          </div>
        </div>

      </div>
  );
}

export default NodeTooltip;
