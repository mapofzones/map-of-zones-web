import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function LinkTooltip({ period }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, []);

  let mapTooltip = document.querySelector('.graph-tooltip');

  if (!mapTooltip) {
    return null;
  }

  return (
    <div
      className={cx('custom-tooltip', 'link-tooltip', { active: isActive })}
      style={{
        left: parseInt(mapTooltip.style.left) + 15 + 'px',
        top: parseInt(mapTooltip.style.top) + 15 + 'px',
      }}
    >
      <div className={cx('row')}>
        <div className={cx('col')}>
          <div className={cx('item-text', 'normal-weight')}>White rabbit</div>
        </div>
        <div className={cx('col')}>
          <div className={cx('arrow-right')} />
        </div>
        <div className={cx('col')}>
          <div className={cx('item-text', 'normal-weight')}>Famer</div>
        </div>
      </div>

      <div className={cx('row')}>
        <div className={cx('col')}>
          <div className={cx('item-text')}>138</div>
        </div>
        <div className={cx('col')}>
          <div className={cx('key-text')}>TXs per {period}</div>
        </div>
      </div>
    </div>
  );
}

export default LinkTooltip;
