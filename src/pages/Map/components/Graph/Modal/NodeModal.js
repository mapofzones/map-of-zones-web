import React from 'react';
import classNames from 'classnames/bind';
import Modal from 'components/Modal';

import { formatNumber, formatPercentage } from 'common/helper';

import styles from './index.module.css';
import { ReactComponent as CloseIcon } from 'assets/images/close-btn.svg';

const cx = classNames.bind(styles);

function NodeModal({ isOpen, onRequestClose, node, period }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentClassName={cx('content-top')}
      overlayClassName={cx('overlay-none')}
      animations={{
        afterOpen: 'animate__slideInDown',
        beforeClose: 'animate__slideOutUp',
      }}
    >
      <div className={cx('node-modal')}>
        <div className={cx('header-row')}>
          <div className={cx('header-text')}>{node.name}</div>
          <button
            type="button"
            onClick={onRequestClose}
            className={cx('close-btn')}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={cx('modal-content')}>
          <div className={cx('col-modal')}>
            <div className={cx('row')}>
              <div className={cx('key-text')}>Channels</div>
              <div className={cx('item-text')}>
                {formatNumber(node.channels)}
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text')}>Total TXs</div>
              <div className={cx('item-text')}>
                {formatNumber(node.totalTxs)}
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text')}>IBC transfers</div>
              <div className={cx('item-text')}>
                {formatNumber(node.totalIbcTxs)}
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text')}>IBC share %</div>
              <div className={cx('item-text')}>
                {formatPercentage(node.ibcPercentage)}
              </div>
            </div>
          </div>
          <div className={cx('col-modal')}>
            <div className={cx('row')}>
              <div className={cx('key-text')}>IBC out</div>
              <div className={cx('key-double')}>
                <div className={cx('item-text')}>
                  {formatNumber(node.ibcSent)}
                </div>
                <div className={cx('item-text', 'sent-title')}>
                  {formatPercentage(node.ibcSentPercentage)}
                </div>
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text')}>IBC in</div>
              <div className={cx('key-double')}>
                <div className={cx('item-text')}>
                  {formatNumber(node.ibcReceived)}
                </div>
                <div className={cx('item-text', 'received-title')}>
                  {formatPercentage(node.ibcReceivedPercentage)}
                </div>
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text')}>IBC Out Failed</div>
              <div className={cx('item-text')}>
                {formatNumber(node.ibcTxOutFailed)}
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text')}>IBC in Failed</div>
              <div className={cx('item-text')}>
                {formatNumber(node.ibcTxInFailed)}
              </div>
            </div>
          </div>
        </div>
        <div className={cx('period-title')}>{period}</div>
      </div>
    </Modal>
  );
}

export default NodeModal;
