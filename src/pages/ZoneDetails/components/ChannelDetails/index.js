import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import Modal from 'components/Modal';

import { ReactComponent as CloseIcon } from 'assets/images/close-btn.svg';
import { ReactComponent as CurvedLine } from 'assets/images/curved-line-big.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function ChannelDetails({ isOpen, onAfterClose, onRequestClose, channel }) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterClose={onAfterClose}
      onRequestClose={onRequestClose}
      contentClassName={cx('container')}
      animations={{
        afterOpen: 'animate__slideInRight',
        beforeClose: 'animate__slideOutRight',
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
              <div className={cx('zone-name')}>
                {channel?.sourceZoneReadableName}
              </div>
              <div className={cx('zone-name')}>
                {channel?.zoneCounterpartyReadableName}
              </div>
            </div>
          </div>

          <div className={cx('line')} />

          <div className={cx('section-title')}>Data</div>

          <div className={cx('item-container')}>
            <div className={cx('item')}>Client ID</div>
            <div className={cx('item')}>{channel?.clientId}</div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>Connection ID</div>
            <div className={cx('item')}>{channel?.connectionId}</div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>State</div>
            <div className={cx('item')}>
              {channel?.isOpened ? 'Opened' : 'Closed'}
            </div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>Channel ID</div>
            <div className={cx('item')}>{channel?.channelId}</div>
          </div>
          <div className={cx('item-container')}>
            <div className={cx('item')}>Counterparty Channel ID</div>
            <div className={cx('item')}>
              {channel?.zoneCounterpartyChannelId || '--'}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

ChannelDetails.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAfterClose: PropTypes.func,
  channel: PropTypes.object,
};

export default ChannelDetails;
