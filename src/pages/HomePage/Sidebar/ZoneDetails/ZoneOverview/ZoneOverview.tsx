import cn from 'classnames';

import { Button, Card, NumberFormat, NumberType } from 'components';
import { ArrowRight } from 'icons';

import { useZoneOverview } from './useZoneOverview';
import styles from './ZoneOverview.module.scss';

function ZoneOverview() {
  const data = useZoneOverview();

  return (
    <>
      {data && (
        <div className={styles.container}>
          <Card className={styles.totalOverview}>
            <span className={styles.title}>IBC Volume (24h)</span>
            <NumberFormat
              className={styles.volumeValue}
              value={data.ibcVolumeMainnet}
              numberType={NumberType.Currency}
            />
            <div className={styles.chart}></div>
            <div className={styles.lineChart}>
              <hr />
            </div>
            <NumberFormat
              className={styles.volumeInValue}
              value={data.ibcVolumeInMainnet}
              numberType={NumberType.Currency}
            />
            <NumberFormat
              className={cn(styles.volumeOutValue, 'align-right')}
              value={data.ibcVolumeOutMainnet}
              numberType={NumberType.Currency}
            />
            <NumberFormat
              className={styles.volumeInPendingValue}
              value={data.ibcVolumeInPendingMainnet}
              numberType={NumberType.Currency}
            />
            <NumberFormat
              className={cn(styles.volumeOutPendingValue, 'align-right')}
              value={data.ibcVolumeOutPendingMainnet}
              numberType={NumberType.Currency}
            />
          </Card>
          <div className={styles.detailedInfo}>Details</div>
          <Button className={styles.detailedBtn}>
            <span className={styles.btnText}>Learn More</span>
            <ArrowRight />
          </Button>
        </div>
      )}
    </>
  );
}

export { ZoneOverview };
