import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
const cx = classNames.bind(styles);

function Footer () {

  return (
    <div className={cx('footer-container')}>
      <div className={cx('made-by-title')}>
        Map of Zones by <span>Bitquasar.com</span> & <span>Ztake.org</span>
      </div>
      <div className={cx('social-container')}>
        <a href='' target='_blank'>
          <div className={cx('social-icon', 'facebook')}/>
          <span>Facebook</span>
        </a>
        <a href='' target='_blank'>
          <div className={cx('social-icon', 'github')}/>
          <span>GitHub</span>
        </a>
        <a href='https://twitter.com/mapofzones' target='_blank'>
          <div className={cx('social-icon', 'twitter')}/>
          <span>Twitter</span>
        </a>
        <a href='https://t.me/MapOfZones' target='_blank'>
          <div className={cx('social-icon', 'telegram')}/>
          <span>Telegram</span>
        </a>
        <a href=''>
          <span>Contact us: </span>
          hi@ztake.org
        </a>
      </div>
      <div className={cx('title-mobile')}>We on social media</div>
    </div>
  );
}

export default Footer;
