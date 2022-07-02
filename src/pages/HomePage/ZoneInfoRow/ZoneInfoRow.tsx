import cn from 'classnames';

import { LinkWithQuery, NumberFormat } from 'components';
import { PendingIcon } from 'icons';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({ zone, numberType, className, ...props }: ZonesInfoRowProps): JSX.Element {
  return (
    <LinkWithQuery to={`${zone.id}/overview`}>
      <div className={cn(styles.row, className)} {...props}>
        <div className={styles.logoContainer}>
          {zone.logoUrl && (
            <img className={styles.logo} src={zone.logoUrl} alt={`${zone.name} logo`} />
          )}
        </div>
        <span className={styles.name}>{zone.name}</span>
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
