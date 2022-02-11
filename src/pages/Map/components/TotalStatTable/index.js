import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { formatNumber, isNumber } from 'common/helper';
import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function TotalStatTable({
  period,
  ibcTxsChart,
  ibcVolumeChart,
  ibcVolumePending,
  ibcTxsPending,
  ibcTxs,
  allZones,
  activeZones,
  allChannels,
  showChannels,
  activeChannels,
  mostActiveByTxsZonesPair,
  mostActiveByVolumeZonesPair,
  isTableOpened,
  ibcVolume,
  ibcVolumeDiff,
  ibcTxsDiff,
  showIbcVolumeChart,
  showIbcTxsChart,
}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', { tableOpened: isTableOpened })}>
        <div className={cx('item')}>
          <div className={cx('statContainer')}>
            <div className={cx('statNameContainer')}>
              <div className={cx('statName')}>
                <FormattedMessage
                  id="ibc-volume"
                  defaultMessage="IBC volume {period}"
                  values={{
                    period: <span className={cx('period')}>{period}</span>,
                  }}
                />
              </div>
              {!!ibcVolumePending && (
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={ibcVolumePending}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              )}
            </div>
            <div className={cx('statValue', 'diffContainer')}>
              <FormattedNumber
                value={ibcVolume}
                style="currency"
                currency="USD"
                maximumFractionDigits="0"
              />
              {isNumber(ibcVolumeDiff) && (
                <div
                  className={cx('diffTooltip', 'top', {
                    negative: ibcVolumeDiff < 0,
                  })}
                >
                  {ibcVolumeDiff > 0 ? '+' : ''}
                  <FormattedNumber
                    value={ibcVolumeDiff}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              )}
            </div>
          </div>
          {showIbcVolumeChart && ibcVolumeChart?.length && (
            <ResponsiveContainer className={cx('activityContainer')}>
              <AreaChart data={ibcVolumeChart} margin={{ bottom: 0 }}>
                <Area
                  strokeWidth={2}
                  type="linear"
                  dataKey="cashflow"
                  stroke="#6ea77f"
                  fill="#5CA97B"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className={cx('item')}>
          <div className={cx('statContainer')}>
            <div className={cx('statNameContainer')}>
              <div className={cx('statName')}>
                <FormattedMessage
                  id="number-of-ibc-txs-stat"
                  defaultMessage="Number of IBC transfers {period}"
                  values={{
                    period: <span className={cx('period')}>{period}</span>,
                  }}
                />
              </div>
              {!!ibcTxsPending && (
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  {ibcTxsPending}
                </div>
              )}
            </div>
            <div className={cx('statValue', 'diffContainer')}>
              {formatNumber(ibcTxs)}
              {isNumber(ibcTxsDiff) && (
                <div
                  className={cx('diffTooltip', 'top', {
                    negative: ibcTxsDiff < 0,
                  })}
                >
                  {(ibcTxsDiff > 0 ? '+' : '') + formatNumber(ibcTxsDiff)}
                </div>
              )}
            </div>
          </div>
          {showIbcTxsChart && ibcTxsChart?.length && (
            <ResponsiveContainer className={cx('activityContainer')}>
              <AreaChart data={ibcTxsChart} margin={{ bottom: 0 }}>
                <Area
                  strokeWidth={2}
                  type="linear"
                  dataKey="txs"
                  stroke="#6ea77f"
                  fill="#5CA97B"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className={cx('item')}>
          <div className={cx('statContainerSmall')}>
            <div className={cx('statContainer', 'small')}>
              <div className={cx('statName')}>
                <FormattedMessage
                  id="all-zones-stat"
                  defaultMessage="All Zones"
                />
              </div>
              <div className={cx('statValue')}>{formatNumber(allZones)}</div>
            </div>
            <div className={cx('statContainer', 'small')}>
              <div className={cx('statName')}>
                <FormattedMessage
                  id="active-zones-stat"
                  defaultMessage="Active Zones {period}"
                  values={{
                    period: <span className={cx('period')}>{period}</span>,
                  }}
                />
              </div>
              <div className={cx('statValue')}>{formatNumber(activeZones)}</div>
            </div>
          </div>
        </div>
        {showChannels && (
          <div className={cx('item')}>
            <div className={cx('statContainerSmall')}>
              <div className={cx('statContainer', 'small')}>
                <div className={cx('statName')}>
                  <FormattedMessage
                    id="all-channels-stat"
                    defaultMessage="All Channels"
                  />
                </div>
                <div className={cx('statValue')}>
                  {formatNumber(allChannels)}
                </div>
              </div>
              <div className={cx('statContainer', 'small')}>
                <div className={cx('statName')}>
                  <FormattedMessage
                    id="active-channels-stat"
                    defaultMessage="Active Channels {period}"
                    values={{
                      period: <span className={cx('period')}>{period}</span>,
                    }}
                  />
                </div>
                <div className={cx('statValue')}>
                  {formatNumber(activeChannels)}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx('item')}>
          <div className={cx('statContainer', 'mostActiveZonesPairContainer')}>
            <div>
              <div className={cx('statNameContainer')}>
                <div className={cx('statName')}>
                  <FormattedMessage
                    id="most-active-zones-pair-stat"
                    defaultMessage="Most Active Pair of Zones"
                  />
                </div>
              </div>
              {mostActiveByTxsZonesPair && (
                <div className={cx('mostActiveZonesPair')}>
                  <div className={cx('zoneNameContainer')}>
                    <div
                      className={cx('circle')}
                      style={{
                        backgroundColor: mostActiveByTxsZonesPair.sourceColor,
                      }}
                    />
                    <div className={cx('zoneName')}>
                      {mostActiveByTxsZonesPair.source}
                    </div>
                  </div>
                  <div className={cx('zonesLink')} />
                  <div className={cx('zoneNameContainer')}>
                    <div
                      className={cx('circle')}
                      style={{
                        backgroundColor: mostActiveByTxsZonesPair.targetColor,
                      }}
                    />
                    <div className={cx('zoneName')}>
                      {mostActiveByTxsZonesPair.target}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {mostActiveByTxsZonesPair && (
              <div className={cx('mostActiveZonesPairValueContainer')}>
                <div
                  className={cx('mostActiveZonesPairValue', 'diffContainer')}
                >
                  <FormattedMessage
                    id="most-active-zones-pair-ibc-txs"
                    defaultMessage="{txs} transfers"
                    values={{
                      txs: formatNumber(mostActiveByTxsZonesPair.txs),
                    }}
                  />
                  {isNumber(mostActiveByTxsZonesPair.txsDiff) && (
                    <div
                      className={cx('diffTooltip', {
                        negative: mostActiveByTxsZonesPair.txsDiff < 0,
                      })}
                    >
                      {(mostActiveByTxsZonesPair.txsDiff > 0 ? '+' : '') +
                        formatNumber(mostActiveByTxsZonesPair.txsDiff)}
                    </div>
                  )}
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  {mostActiveByTxsZonesPair.txsPending}
                </div>
                <span className={cx('period')}>{period}</span>
              </div>
            )}
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('statContainer', 'mostActiveZonesPairContainer')}>
            <div>
              <div className={cx('statNameContainer')}>
                <div className={cx('statName')}>
                  <FormattedMessage
                    id="biggest-volume-pair-stat"
                    defaultMessage="Biggest volume Pair"
                  />
                </div>
              </div>
              {mostActiveByVolumeZonesPair && (
                <div className={cx('mostActiveZonesPair')}>
                  <div className={cx('zoneNameContainer')}>
                    <div
                      className={cx('circle')}
                      style={{
                        backgroundColor:
                          mostActiveByVolumeZonesPair.sourceColor,
                      }}
                    />
                    <div className={cx('zoneName')}>
                      {mostActiveByVolumeZonesPair.source}
                    </div>
                  </div>
                  <div className={cx('zonesLink')} />
                  <div className={cx('zoneNameContainer')}>
                    <div
                      className={cx('circle')}
                      style={{
                        backgroundColor:
                          mostActiveByVolumeZonesPair.targetColor,
                      }}
                    />
                    <div className={cx('zoneName')}>
                      {mostActiveByVolumeZonesPair.target}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {mostActiveByVolumeZonesPair && (
              <div className={cx('mostActiveZonesPairValueContainer')}>
                <div
                  className={cx('mostActiveZonesPairValue', 'diffContainer')}
                >
                  <FormattedNumber
                    value={mostActiveByVolumeZonesPair.volume}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                  {isNumber(mostActiveByVolumeZonesPair.volumeDiff) && (
                    <div
                      className={cx('diffTooltip', {
                        negative: mostActiveByVolumeZonesPair.volumeDiff < 0,
                      })}
                    >
                      {mostActiveByVolumeZonesPair.volumeDiff > 0 ? '+' : ''}
                      <FormattedNumber
                        value={mostActiveByVolumeZonesPair.volumeDiff}
                        style="currency"
                        currency="USD"
                        maximumFractionDigits="0"
                      />
                    </div>
                  )}
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  {mostActiveByVolumeZonesPair.volumePending}
                </div>
                <span className={cx('period')}>{period}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

TotalStatTable.propTypes = {
  period: PropTypes.node,
  ibcTxsChart: PropTypes.arrayOf(
    PropTypes.shape({
      txs: PropTypes.number,
    }),
  ),
  ibcVolumeChart: PropTypes.arrayOf(
    PropTypes.shape({
      cashflow: PropTypes.number,
    }),
  ),
  ibcVolumePending: PropTypes.number,
  ibcTxsPending: PropTypes.number,
  ibcTxs: PropTypes.number,
  allZones: PropTypes.number,
  activeZones: PropTypes.number,
  allChannels: PropTypes.number,
  activeChannels: PropTypes.number,
  ibcVolume: PropTypes.number,
  ibcVolumeDiff: PropTypes.number,
  ibcTxsDiff: PropTypes.number,
  mostActiveByTxsZonesPair: PropTypes.shape({
    source: PropTypes.string,
    sourceColor: PropTypes.string,
    target: PropTypes.string,
    targetColor: PropTypes.string,
    txsPending: PropTypes.number,
    txs: PropTypes.number,
    txsDiff: PropTypes.number,
  }),
  mostActiveByVolumeZonesPair: PropTypes.shape({
    source: PropTypes.string,
    sourceColor: PropTypes.string,
    target: PropTypes.string,
    targetColor: PropTypes.string,
    volumePending: PropTypes.number,
    volume: PropTypes.number,
    volumeDiff: PropTypes.number,
  }),
  showChannels: PropTypes.bool,
  showIbcVolumeChart: PropTypes.bool,
  showIbcTxsChart: PropTypes.bool,
};

TotalStatTable.defaultProps = {
  showChannels: false,
  showIbcVolumeChart: false,
  showIbcTxsChart: false,
};

export default TotalStatTable;
