import React, { useCallback, useMemo } from 'react';
import Switch from 'react-switch';
import { useMedia } from 'react-media';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-icon.svg';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoBeta } from 'assets/images/logo-beta.svg';
import { ReactComponent as Stick } from 'assets/images/stick.svg';

import { removeDuplicatedZoneCounerparties } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Header({
  navigateToMainPage,
  onCloseClick,
  source,
  toggleZonesPicker,
  zoneStat,
  isTestnetVisible,
  toggleShowTestnet,
}) {
  const isSmallScreen = useMedia({ query: '(max-width: 500px)' });

  const targets = useMemo(
    () => removeDuplicatedZoneCounerparties(zoneStat.selectedNodes),
    [zoneStat],
  );

  const sourceName = useMemo(() => {
    if (targets?.[0]?.name) {
      return targets[0].name[0].toUpperCase() + targets[0].name.substring(1);
    }

    return source;
  }, [source, targets]);

  const sourceURL = useMemo(() => targets?.[0]?.zone_label_url2, [targets]);

  const renderTarget = useCallback((item, index, array) => {
    return (
      <div
        className={cx('header-title')}
        key={`target_${item.zone_counerparty}`}
      >
        {!!item.zone_counterparty_label_url2 && (
          <img
            className={cx('header-title-image')}
            src={item.zone_counterparty_label_url2}
            alt=""
          />
        )}
        {`${item.zone_counterparty_readable_name[0].toUpperCase() +
          item.zone_counterparty_readable_name.substring(1)}${
          index !== array.length - 1 ? ',\u00A0\u00A0' : ''
        }`}
      </div>
    );
  }, []);

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

      <div className={cx('header-container')}>
        <div className={cx('header-title')}>
          {!!sourceURL && (
            <img className={cx('header-title-image')} src={sourceURL} alt="" />
          )}
          {sourceName}
          <Stick className={cx('stick')} />
        </div>
        <div
          className={cx('header-title', 'header-clickable')}
          onClick={toggleZonesPicker}
        >
          {[...targets].splice(0, isSmallScreen ? 1 : 3).map(renderTarget)}
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
