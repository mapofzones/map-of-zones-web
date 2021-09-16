import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
const cx = classNames.bind(styles);

function SuccessfulCircle({ isOpen }) {
  return (
    <div className={cx('circle-wrapper', isOpen ? 'show' : '')}>
      <div className={cx('circle-border')}>
        <div className={cx('circle')}>
          <h1>Your form has been sent successfully</h1>
          <p>
            We highly appreciate your effort and will do our best to make it
            real. stay tuned
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulCircle;
