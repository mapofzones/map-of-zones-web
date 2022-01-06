import React from 'react';
import Switch from 'react-switch';
import classNames from 'classnames/bind';

import { ReactComponent as BackIcon } from 'assets/images/arrow-back.svg';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoBeta } from 'assets/images/logo-beta.svg';

import PeriodSwitcher from '../../../Map/components/PeriodSwitcher';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Header({
  navigateToMainPage,
  onCloseClick,
  source,
  isTestnetVisible,
  toggleShowTestnet,
  period,
  setPeriod,
}) {
  return (
    <div className={cx('container')}>
      <Logo onClick={navigateToMainPage} className={cx('logo')} />
      <LogoBeta className={cx('logo-beta')} />
      <div className={cx('switch-container')}>
        <Switch
          checkedIcon={null}
          uncheckedIcon={null}
          onChange={toggleShowTestnet}
          checked={isTestnetVisible}
          height={15}
          width={28}
          onColor="#5FAA8C"
        />
        <span className={cx('switch-text')}>Show testnet</span>
      </div>
      <div className={cx('headerContainer')}>
        <div className={cx('sourceInfo')}>
          <button
            type="button"
            onClick={onCloseClick}
            className={cx('roundButton', 'backButton')}
          >
            <BackIcon />
          </button>
          <div className={cx('header-title')}>
            {!!source?.labelUrl && (
              <img
                className={cx('header-title-image')}
                src={source.labelUrl}
                alt=""
              />
            )}
            {source?.name || ''}
          </div>
          {!!source?.website && (
            <a
              href={source.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cx('zoneWebsite')}
            >
              Visit website
            </a>
          )}
        </div>
        <PeriodSwitcher hours={period.hours} onChange={setPeriod} />
      </div>
    </div>
  );
}

export default Header;
