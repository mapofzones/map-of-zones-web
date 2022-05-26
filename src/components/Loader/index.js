import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
const cx = classNames.bind(styles);

function Loader() {
  return (
    <div className={cx('loader-wrapper')}>
      <div className={cx('sk-chasing-dots')}>
        <div className={cx('sk-child', 'sk-dot-1')} />
        <div className={cx('sk-child', 'sk-dot-2')} />
      </div>
    </div>
  );
}

export default Loader;
