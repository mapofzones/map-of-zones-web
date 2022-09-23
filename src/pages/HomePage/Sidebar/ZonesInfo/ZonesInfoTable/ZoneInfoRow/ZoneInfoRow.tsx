import cn from 'classnames';

import { LinkWithSearchParams, NumberType, ValueWithPending, ZoneInfoWithSearch } from 'components';
import {
  SelectedZoneSourceView,
  useHomePageSelectedZoneAnalytics,
} from 'hooks/analytics/home/useHomePageSelectedZoneAnalytics';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({
  zone,
  searchValue,
  numberType = NumberType.Number,
  className,
}: ZonesInfoRowProps): JSX.Element {
  const trackSelectedZone = useHomePageSelectedZoneAnalytics(SelectedZoneSourceView.Sidebar);

  const onZoneInfoRowClick = () => {
    trackSelectedZone(zone.id);
  };

  return (
    <LinkWithSearchParams
      to={`${zone.id}/overview`}
      state={{ source: SelectedZoneSourceView.Sidebar }}
      className={cn(styles.row, className)}
      onClick={onZoneInfoRowClick}
    >
      <ZoneInfoWithSearch className={styles.zoneContainer} searchValue={searchValue} zone={zone} />

      <ValueWithPending
        alignRight={true}
        className={styles.value}
        numberType={numberType}
        value={zone.value}
        pendingValue={zone.pendingValue}
      />
    </LinkWithSearchParams>
  );
}

export { ZoneInfoRow };
