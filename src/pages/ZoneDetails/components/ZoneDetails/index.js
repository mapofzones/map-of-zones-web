import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import Modal from 'components/Modal';

import { ReactComponent as CloseIcon } from 'assets/images/close-btn.svg';
import { ReactComponent as CurvedLine } from 'assets/images/curved-line-big.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function ZoneDetails({ isOpen, onRequestClose, zone }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentClassName={cx('container')}
      animations={{
        afterOpen: 'animate__slideInRight',
        beforeClose: 'animate__slideOutRight',
        overlayAfterOpen: 'overlayFadeIn',
        overlayBeforeClose: 'overlayFadeOut',
      }}
    >
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <div className={cx('titleContainer')}>
            <div className={cx('title')}>
              <FormattedMessage
                id="zones-filter-title"
                defaultMessage="Details"
              />
            </div>
            <button
              type="button"
              onClick={onRequestClose}
              className={cx('closeButton')}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('zone-name-container')}>
            <CurvedLine className={cx('curved-line')} />
            <div>
              <div className={cx('zone-name')}>{zone?.name}</div>
              <div className={cx('zone-name')}>{zone?.zone_counerparty}</div>
            </div>
          </div>

          <div className={cx('line')} />

          <div className={cx('section-title')}>Data</div>

          <div className={cx('item-container')}>
            <div className={cx('item')}>Client ID</div>
            <div className={cx('item')}>{zone?.client_id}</div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>Connection ID</div>
            <div className={cx('item')}>{zone?.connection_id}</div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>State</div>
            <div className={cx('item')}>
              {zone?.is_opened ? 'Opened' : 'Closed'}
            </div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>Channel ID</div>
            <div className={cx('item')}>{zone?.channel_id}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ZoneDetails.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default ZoneDetails;
