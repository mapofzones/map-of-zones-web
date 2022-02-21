import React from 'react';

import styles from './index.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cx('externalLink')}
  >
    {children}
  </a>
);
