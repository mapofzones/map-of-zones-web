import { useParams } from 'react-router-dom';

import { Button, NumberFormat, IbcVolumeCard, ScrollableContainer } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowRight } from 'icons';
import { ElementSize } from 'types/ElementSize';

import { useZoneOverview } from './useZoneOverview';
import styles from './ZoneOverview.module.scss';
import { ZoneOverviewItem } from './ZoneOverviewItem/ZoneOverviewItem';

function ZoneOverview() {
  const navigateWithSearchParams = useNavigateWithSearchParams();

  const { zone } = useParams();

  const [period] = useSelectedPeriod();

  const { data, loading } = useZoneOverview();

  const onDetailedBtnClick = () => {
    navigateWithSearchParams(`/zones/${zone}/overview`);
  };

  return (
    <>
      <ScrollableContainer className={styles.container}>
        <IbcVolumeCard data={data} period={period} loading={loading} hasBorder />
        <div className={styles.detailedInfo}>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Total Txs'}
            period={period}
            value={data?.totalTxs}
            loading={loading}
            defaultLoadingValue={'1 156 288'}
          ></ZoneOverviewItem>

          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'IBC Transfers'}
            period={period}
            value={data?.ibcTransfers}
            loading={loading}
            defaultLoadingValue={'72 235'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Peers'}
            value={data?.peersCountMainnet}
            loading={loading}
            defaultLoadingValue={'12'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Channels'}
            value={data?.channelsCount}
            loading={loading}
            defaultLoadingValue={'250'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'DAU'}
            loading={loading}
            value={data?.ibcDauMainnet}
          >
            -
          </ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'IBC DAU'}
            loading={loading}
            defaultLoadingValue={'2 345 (99,8% of DAU)'}
          >
            <NumberFormat value={data?.ibcDauMainnet} />
            <span className={styles.additionalInfo}> (99,8% of DAU)</span>
          </ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Token Price'}
            value={data?.ibcDauMainnet}
            loading={loading}
            defaultLoadingValue={'$10.45'}
          >
            -
          </ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Market Cap'}
            loading={loading}
            defaultLoadingValue={'$123,456,789'}
          >
            -
          </ZoneOverviewItem>
        </div>
      </ScrollableContainer>
      <Button
        className={styles.detailedBtn}
        onClick={onDetailedBtnClick}
        size={ElementSize.LARGE}
        buttonType={ButtonType.SECONDARY}
      >
        <span className={styles.btnText}>Learn More</span>
        <ArrowRight />
      </Button>
    </>
  );
}

export { ZoneOverview };
