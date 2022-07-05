import { useMemo } from 'react';

import cn from 'classnames';

import { LinkWithQuery, NumberFormat } from 'components';
import { PendingIcon } from 'icons';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({ zone, numberType, className, ...props }: ZonesInfoRowProps): JSX.Element {
  const ratingDiffAbs = useMemo(() => Math.abs(zone.ratingDiff), [zone]);

  return (
    <LinkWithQuery to={`${zone.id}/overview`}>
      <div className={cn(styles.row, className)} {...props}>
        <div className={styles.logoContainer}>
          {zone.logoUrl && (
            <img className={styles.logo} src={zone.logoUrl} alt={`${zone.name} logo`} />
          )}
        </div>
        <span className={styles.zoneInfo}>
          {zone.name}
          {!!zone.ratingDiff && (
            <div className={cn(styles.ratingDiff, { [styles.negative]: zone.ratingDiff < 0 })}>
              <div
                className={cn(styles.triangle, {
                  [styles.triangleUp]: zone.ratingDiff > 0,
                  [styles.triangleDown]: zone.ratingDiff < 0,
                })}
              />
              <div>{ratingDiffAbs}</div>
            </div>
          )}
        </span>
        <span className={cn(styles.value, 'text-align')}>
          <NumberFormat value={zone.value} numberType={numberType} />
        </span>
        {zone.pendingValue != null && (
          <span className={cn(styles.pendingValueContainer, 'text-align')}>
            <PendingIcon />
            <span className={styles.pendingValue}>
              <NumberFormat value={zone.pendingValue} numberType={numberType} />
            </span>
          </span>
        )}
      </div>
    </LinkWithQuery>
  );
}

export { ZoneInfoRow };
