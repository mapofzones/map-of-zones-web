import { useParams } from 'react-router-dom';

import { NumberFormat, IbcVolumeCard, ScrollableContainer, NumberType } from 'components';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { getZonesOverviewPath } from 'routing';
import { tooltips } from 'types/Tooltips';
import { getDauTitleByPeriod } from 'utils/helper';

import { LearnMoreButton } from '../../LearnMoreButton';
import { useZoneOverview } from './useZoneOverview';
import styles from './ZoneOverview.module.scss';
import { ZoneOverviewItem } from './ZoneOverviewItem/ZoneOverviewItem';

function ZoneOverview() {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const { zone } = useParams();

  const [period] = useSelectedPeriod(true);

  const { data, loading } = useZoneOverview();

  const onDetailedBtnClick = () => {
    navigateWithSearchParams(`/${getZonesOverviewPath(zone)}`);
  };

  const dauTitle = getDauTitleByPeriod(period);

  return (
    <>
      <ScrollableContainer className={styles.container}>
        <IbcVolumeCard hasBorder />
        <div className={styles.detailedInfo}>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Total Txs'}
            period={period}
            value={data?.totalTxs}
            loading={loading}
            defaultLoadingValue={'1 156 288'}
            tooltipText={tooltips['totalTxs']()}
          ></ZoneOverviewItem>

          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'IBC Transfers'}
            period={period}
            value={data?.ibcTransfers}
            loading={loading}
            defaultLoadingValue={'72 235'}
            tooltipText={tooltips['ibcTransfers']()}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Peers'}
            value={data?.peersCount}
            loading={loading}
            defaultLoadingValue={'12'}
            tooltipText={tooltips['peersCount']()}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Channels'}
            value={data?.channelsCount}
            loading={loading}
            defaultLoadingValue={'250'}
            tooltipText={tooltips['channelsCount']()}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={dauTitle}
            loading={loading}
            value={data?.dau}
            tooltipText={tooltips['dau'](period)}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={`IBC ${dauTitle}`}
            loading={loading}
            defaultLoadingValue={`2 345 (99,8% of ${dauTitle})`}
            tooltipText={tooltips['ibcDau'](period)}
          >
            <NumberFormat value={data?.ibcDau} />
            <span className={styles.additionalInfo}>
              {' '}
              (<NumberFormat value={data?.ibcDauPercent} numberType={NumberType.Percent} />
              {` of ${dauTitle}`})
            </span>
          </ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Token Price'}
            loading={loading}
            defaultLoadingValue={'$10.45'}
          >
            <NumberFormat value={data?.price} numberType={NumberType.Currency} />
            <span className={styles.additionalInfo}> {data?.tokenSymbol}</span>
          </ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Market Cap'}
            value={data?.marketCap}
            loading={loading}
            defaultLoadingValue={'$123,456,789'}
            tooltipText={tooltips['marketCap']()}
          ></ZoneOverviewItem>
        </div>
      </ScrollableContainer>

      <LearnMoreButton onClick={onDetailedBtnClick} />
    </>
  );
}

export { ZoneOverview };
