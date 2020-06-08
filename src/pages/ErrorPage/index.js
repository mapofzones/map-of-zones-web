import React from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoBeta } from 'assets/images/logo-beta.svg';
import { ReactComponent as ErrorIcon } from 'assets/images/error-icon.svg';

import styles from './index.module.css';
const cx = classNames.bind(styles);

function ErrorPage() {
  return (
    <div>
      <Logo className={cx('logo')} />
      <LogoBeta className={cx('logo-beta')} />
      <div className={cx('error-wrapper')}>
        <ErrorIcon className={cx('error-icon')} />
        <div className={cx('text-wrapper')}>
          <div className={cx('title')}>
            Oops..
            <br />
            Something went wrong
          </div>
          <div className={cx('subtitle')}>Try to reload the page</div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
