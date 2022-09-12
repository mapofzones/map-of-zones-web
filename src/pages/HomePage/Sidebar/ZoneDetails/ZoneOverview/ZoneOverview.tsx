import { useParams } from 'react-router-dom';

import { Button, NumberFormat, IbcVolumeCard, ScrollableContainer, NumberType } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { ArrowRight } from 'icons';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';
import { getDauTitleByPeriod } from 'utils/helper';

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

  const dauTittle = getDauTitleByPeriod(period);

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
            tooltipPosition={'right'}
          ></ZoneOverviewItem>

          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'IBC Transfers'}
            period={period}
            value={data?.ibcTransfers}
            loading={loading}
            defaultLoadingValue={'72 235'}
            tooltipText={tooltips['ibcTransfers']()}
            tooltipPosition={'left'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Peers'}
            value={data?.peersCount}
            loading={loading}
            defaultLoadingValue={'12'}
            tooltipText={tooltips['peersCount']()}
            tooltipPosition={'right'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Channels'}
            value={data?.channelsCount}
            loading={loading}
            defaultLoadingValue={'250'}
            tooltipText={tooltips['channelsCount']()}
            tooltipPosition={'left'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={dauTittle}
            loading={loading}
            value={data?.dau}
            tooltipText={tooltips['dau'](period)}
            tooltipPosition={'right'}
          ></ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={`IBC ${dauTittle}`}
            loading={loading}
            defaultLoadingValue={`2 345 (99,8% of ${dauTittle})`}
            tooltipText={tooltips['ibcDau'](period)}
            tooltipPosition={'left'}
          >
            <NumberFormat value={data?.ibcDau} />
            <span className={styles.additionalInfo}>
              {' '}
              (<NumberFormat value={data?.ibcDauPercent} numberType={NumberType.Percent} />
              {` of ${dauTittle}`})
            </span>
          </ZoneOverviewItem>
          <ZoneOverviewItem
            className={styles.detailedInfoItem}
            title={'Token Price'}
            loading={loading}
            defaultLoadingValue={'$10.45'}
            tooltipText={'Some tooltip'} // TODO: use real tooltip
            tooltipPosition={'right'}
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
            tooltipPosition={'left'}
          ></ZoneOverviewItem>
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
