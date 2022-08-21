import cn from 'classnames';

import { LinkWithSearchParams, NumberFormat, NumberType, ZoneInfoWithSearch } from 'components';
import { PendingIcon } from 'icons';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({
  zone,
  searchValue,
  numberType = NumberType.Number,
  className,
}: ZonesInfoRowProps): JSX.Element {
  return (
    <LinkWithSearchParams to={`${zone.id}/overview`} className={cn(styles.row, className)}>
      <ZoneInfoWithSearch className={styles.zoneContainer} searchValue={searchValue} zone={zone} />

      {/* TODO: separate component */}
      <div className={styles.valueContainer}>
        <NumberFormat className={cn(styles.value)} value={zone.value} numberType={numberType} />
        {zone.pendingValue != null && (
          <span className={cn(styles.pendingValueContainer)}>
            <PendingIcon />
            <NumberFormat
              className={styles.pendingValue}
              value={zone.pendingValue}
              numberType={numberType}
            />
          </span>
        )}
      </div>
    </LinkWithSearchParams>
  );
}

export { ZoneInfoRow };
