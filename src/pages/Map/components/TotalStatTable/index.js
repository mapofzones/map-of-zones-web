import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { FormattedMessage } from 'react-intl';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function TotalStatTable({
  period,
  ibcTxsActivity,
  ibcTxs,
  allZones,
  activeZones,
  allChannels,
  activeChannels,
  mostActiveZonesPair,
}) {
  return (
    <div className={cx('container')}>
      <div className={cx('item')}>
        <div className={cx('statContainer')}>
          <div className={cx('statName')}>
            <FormattedMessage
              id="number-of-ibc-txs-stat"
              defaultMessage="Number of IBC TXS {period}"
              values={{
                period: <span className={cx('period')}>{period}</span>,
              }}
            />
          </div>
          <div className={cx('statValue')}>{ibcTxs}</div>
        </div>
        <ResponsiveContainer className={cx('activityContainer')}>
          <AreaChart data={ibcTxsActivity} margin={{ bottom: 0 }}>
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
            <div className={cx('statValue')}>{allZones}</div>
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
            <div className={cx('statValue')}>{activeZones}</div>
          </div>
        </div>
      </div>
      <div className={cx('item')}>
        <div className={cx('statContainerSmall')}>
          <div className={cx('statContainer', 'small')}>
            <div className={cx('statName')}>
              <FormattedMessage
                id="all-channels-stat"
                defaultMessage="All Channels"
              />
            </div>
            <div className={cx('statValue')}>{allChannels}</div>
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
            <div className={cx('statValue')}>{activeChannels}</div>
          </div>
        </div>
      </div>
      <div className={cx('item')}>
        <div className={cx('statContainer')}>
          <div className={cx('statName')}>
            <FormattedMessage
              id="most-active-zones-pair-stat"
              defaultMessage="Most Active Pair of Zones {period}"
              values={{
                period: <span className={cx('period')}>{period}</span>,
              }}
            />
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
  );
}

TotalStatTable.propTypes = {
  period: PropTypes.node,
  ibcTxsActivity: PropTypes.arrayOf(
    PropTypes.shape({
      txs: PropTypes.number,
    }),
  ),
  ibcTxs: PropTypes.number,
  allZones: PropTypes.number,
  activeZones: PropTypes.number,
  allChannels: PropTypes.number,
  activeChannels: PropTypes.number,
  mostActiveZonesPair: PropTypes.shape({
    source: PropTypes.string,
    sourceColor: PropTypes.string,
    target: PropTypes.string,
    targetColor: PropTypes.string,
  }),
};

export default TotalStatTable;
