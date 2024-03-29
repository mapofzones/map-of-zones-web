import cn from 'classnames';

import { NumberType, ValueWithPending, ZoneInfoWithSearch } from 'components';
import { IbcVolumeDisclaimer } from 'components/IbcVolumeDisclaimer/IbcVolumeDisclaimer';
import {
  SelectedZoneSourceView,
  useHomePageSelectedZoneAnalytics,
} from 'hooks/analytics/HomePage/useHomePageSelectedZoneAnalytics';
import { useNavigateWithSearchParams } from 'hooks/useNavigateWithSearchParams';
import { overviewPath } from 'routing';
import { IsGravityBridge } from 'services/IsGravityBridge';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({
  zone,
  searchValue,
  numberType = NumberType.Number,
  className,
}: ZonesInfoRowProps): JSX.Element {
  const trackSelectedZone = useHomePageSelectedZoneAnalytics();

  const navigateWithSearchParams = useNavigateWithSearchParams();

  const onZoneInfoRowClick = () => {
    navigateWithSearchParams(`${zone.id}/${overviewPath}`, {
      state: { source: SelectedZoneSourceView.Sidebar },
    });
    trackSelectedZone(zone.id);
  };

  const isIbcVolumeShouldBeCustomized = IsGravityBridge(zone.id);

  return (
    <div className={cn(styles.row, className)} onClick={onZoneInfoRowClick}>
      <div className={cn(styles.zoneRating, styles.cell)}>{zone.rating}</div>

      <div className={cn(styles.zoneContainer, styles.cell)}>
        <ZoneInfoWithSearch searchValue={searchValue} zone={zone} />
        {isIbcVolumeShouldBeCustomized && <IbcVolumeDisclaimer className={styles.disclaimer} />}
      </div>
      <div className={cn(styles.valueContainer, styles.cell)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={numberType}
          value={zone.value}
          pendingValue={zone.pendingValue}
        />
      </div>
    </div>
  );
}

export { ZoneInfoRow };
