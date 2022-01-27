import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { formatNumber } from 'common/helper';
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
  mostActiveZonesPair,
  biggestVolumePair,
  isTableOpened,
  ibcVolume,
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
            <div className={cx('statValue')}>
              <FormattedNumber
                value={ibcVolume}
                style="currency"
                currency="USD"
                maximumFractionDigits="0"
              />
            </div>
          </div>
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
            <div className={cx('statValue')}>{formatNumber(ibcTxs)}</div>
          </div>
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
          <div className={cx('statContainer')}>
            <div className={cx('statNameContainer')}>
              <div className={cx('statName')}>
                <FormattedMessage
                  id="biggest-volume-pair-stat"
                  defaultMessage="Biggest volume Pair {period}"
                  values={{
                    period: <span className={cx('period')}>{period}</span>,
                  }}
                />
              </div>
              {biggestVolumePair?.volume && (
                <div className={cx('mostActiveZonesPairTxs')}>
                  <FormattedNumber
                    value={biggestVolumePair.volume}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              )}
            </div>
            {biggestVolumePair && (
              <div className={cx('mostActiveZonesPair')}>
                <div className={cx('zoneNameContainer')}>
                  <div
                    className={cx('circle')}
                    style={{
                      backgroundColor: biggestVolumePair.sourceColor,
                    }}
                  />
                  <div className={cx('zoneName')}>
                    {biggestVolumePair.source}
                  </div>
                </div>
                <div className={cx('zonesLink')} />
                <div className={cx('zoneNameContainer')}>
                  <div
                    className={cx('circle')}
                    style={{
                      backgroundColor: biggestVolumePair.targetColor,
                    }}
                  />
                  <div className={cx('zoneName')}>
                    {biggestVolumePair.target}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={cx('item')}>
          <div className={cx('statContainer')}>
            <div className={cx('statNameContainer')}>
              <div className={cx('statName')}>
                <FormattedMessage
                  id="most-active-zones-pair-stat"
                  defaultMessage="Most Active Pair of Zones {period}"
                  values={{
                    period: <span className={cx('period')}>{period}</span>,
                  }}
                />
              </div>
              {mostActiveZonesPair?.ibc && (
                <div className={cx('mostActiveZonesPairTxs')}>
                  <FormattedMessage
                    id="most-active-zones-pair-ibc-txs"
                    defaultMessage="{txs} transfers"
                    values={{
                      txs: formatNumber(mostActiveZonesPair.ibc),
                    }}
                  />
                </div>
              )}
            </div>
            {mostActiveZonesPair && (
              <div className={cx('mostActiveZonesPair')}>
                <div className={cx('zoneNameContainer')}>
                  <div
                    className={cx('circle')}
                    style={{
                      backgroundColor: mostActiveZonesPair.sourceColor,
                    }}
                  />
                  <div className={cx('zoneName')}>
                    {mostActiveZonesPair.source}
                  </div>
                </div>
                <div className={cx('zonesLink')} />
                <div className={cx('zoneNameContainer')}>
                  <div
                    className={cx('circle')}
                    style={{
                      backgroundColor: mostActiveZonesPair.targetColor,
                    }}
                  />
                  <div className={cx('zoneName')}>
                    {mostActiveZonesPair.target}
                  </div>
                </div>
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
  mostActiveZonesPair: PropTypes.shape({
    source: PropTypes.string,
    sourceColor: PropTypes.string,
    target: PropTypes.string,
    targetColor: PropTypes.string,
  }),
  biggestVolumePair: PropTypes.shape({
    source: PropTypes.string,
    sourceColor: PropTypes.string,
    target: PropTypes.string,
    targetColor: PropTypes.string,
  }),
  showAllChannels: PropTypes.bool,
  showActiveChannels: PropTypes.bool,
};

TotalStatTable.defaultProps = {
  showChannels: false,
};

export default TotalStatTable;
