import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { parse, stringify } from 'querystringify';

import { formatNumber, formatPercentage } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function NodeTooltip({ node, period }) {
  const history = useHistory();
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const onDetailsPress = useCallback(() => {
    const { testnet } = parse(location.search);

    const search = {
      period: period.hours,
      source: node.id,
      tableOrderBy: 'success',
      tableOrderSort: 'desc',
    };

    if (testnet === 'true') {
      search.testnet = true;
    } else {
      search.testnet = false;
    }

    history.push(`/zone?${stringify(search)}`, {
      navigateFrom: location,
    });
  }, [history, location, node.id, period.hours]);

  let mapTooltip =
    document.querySelector('.graph-tooltip') ||
    document.querySelector('.scene-tooltip');

  if (!mapTooltip) {
    return null;
  }

  return (
    <div
      className={cx('custom-tooltip', { active: isActive })}
      style={{
        left: parseInt(mapTooltip.style.left) + 'px',
        top: parseInt(mapTooltip.style.top) + 'px',
      }}
    >
      <div
        className={cx('node-custom-tooltip')}
        style={{
          borderTop: `4px solid ${node.color}`,
        }}
      >
        <div className={cx('node-custom-tooltip-content')}>
          <div className={cx('header-row')}>
            <div className={cx('item-text-and-image')}>
              {!!node.zoneLabelUrl && (
                <img
                  className={cx('item-image')}
                  src={node.zoneLabelUrl}
                  alt={node.name}
                />
              )}
              <div className={cx('item-text')}>{node.name}</div>
            </div>
            <div className={cx('key-text', 'period-title')}>{period.name}</div>
          </div>
          <div className={cx('row-tooltip')}>
            <div className={cx('col')}>
              <div className={cx('key-text')}>Channels</div>
              <div className={cx('item-text')}>
                {formatNumber(node.channels)}
              </div>
            </div>
            <div className={cx('col')}>
              <div className={cx('key-text')}>Total TXs</div>
              <div className={cx('item-text')}>
                {formatNumber(node.totalTxs)}
              </div>
            </div>
          </div>
          <div className={cx('row-tooltip')}>
            <div className={cx('col')}>
              <div className={cx('key-text')}>IBC transfers</div>
              <div className={cx('item-text')}>
                {formatNumber(node.totalIbcTxs)}
              </div>
            </div>
            <div className={cx('col')}>
              <div className={cx('key-text')}>IBC share %</div>
              <div className={cx('item-text')}>
                {formatPercentage(node.ibcPercentage)}
              </div>
            </div>
          </div>
          <div className={cx('row-tooltip')}>
            <div className={cx('col')}>
              <div className={cx('key-text')}>IBC out</div>
              <div className={cx('item-text')}>
                {formatNumber(node.ibcSent)}
              </div>
              <div className={cx('item-text', 'sent-title')}>
                {formatPercentage(node.ibcSentPercentage)}
              </div>
            </div>
            <div className={cx('col')}>
              <div className={cx('key-text')}>IBC in</div>
              <div className={cx('item-text')}>
                {formatNumber(node.ibcReceived)}
              </div>
              <div className={cx('item-text', 'received-title')}>
                {formatPercentage(node.ibcReceivedPercentage)}
              </div>
            </div>
          </div>
          <div className={cx('row-tooltip')}>
            <div className={cx('col')}>
              <div className={cx('key-text')}>
                IBC Out
                <br />
                Failed
              </div>
              <div className={cx('item-text')}>
                {formatNumber(node.ibcTxOutFailed)}
              </div>
            </div>
            <div className={cx('col')}>
              <div className={cx('key-text')}>
                IBC in
                <br />
                Failed
              </div>
              <div className={cx('item-text')}>
                {formatNumber(node.ibcTxInFailed)}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onDetailsPress}
          className={cx('details-button')}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default NodeTooltip;
