import React, { useMemo } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoBeta } from 'assets/images/logo-beta.svg';
import { ReactComponent as Stick } from 'assets/images/stick.svg';

import { removeDuplicatedZoneCounerparties } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Header({ onCloseClick, source, toggleZonesPicker, zoneStat }) {
  const targets = useMemo(
    () =>
      removeDuplicatedZoneCounerparties(zoneStat.selectedNodes).map(
        ({ zone_counerparty }) => zone_counerparty,
      ),
    [zoneStat],
  );

  return (
    <div className={cx('container')}>
      <Logo className={cx('logo')} />
      <LogoBeta className={cx('logo-beta')} />

      <div className={cx('header-container')}>
        <div className={cx('header-title')}>{source}</div>
        <Stick className={cx('stick')} />
        <div
          className={cx('header-title', 'header-clickable')}
          onClick={toggleZonesPicker}
        >
          {[...targets].splice(0, 3).join(', ')}
          &nbsp;
          <span className={cx('header-title-counter')}>
            {targets.length > 3 ? `(+ ${targets.length - 3})` : ''}
          </span>
          <ArrowDown className={cx('arrow-down')} />
        </div>
      </div>

      <button
        type="button"
        onClick={onCloseClick}
        className={cx('roundButton', 'closeButton')}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default Header;
