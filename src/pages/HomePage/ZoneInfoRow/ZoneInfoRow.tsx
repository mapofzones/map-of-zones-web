import cn from 'classnames';

import { LinkWithQuery, NumberFormat } from 'components';
import { PendingIcon } from 'icons';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({ data, numberType, className, ...props }: ZonesInfoRowProps): JSX.Element {
  return (
    <LinkWithQuery to={`${data.id}/overview`}>
      <div className={cn(styles.row, className)} {...props}>
        <div className={styles.logoContainer}>
          {data.logoUrl && (
            <img className={styles.logo} src={data.logoUrl} alt={`${data.name} logo`} />
          )}
        </div>
        <span className={styles.name}>{data.name}</span>
        <span className={cn(styles.value, 'text-align')}>
          <NumberFormat value={data.value} numberType={numberType} />
        </span>
        {data.pendingValue != null && (
          <span className={cn(styles.pendingValueContainer, 'text-align')}>
            <PendingIcon />
            <span className={styles.pendingValue}>
              <NumberFormat value={data.pendingValue} numberType={numberType} />
            </span>
          </span>
        )}
      </div>
    </LinkWithQuery>
  );
}

export { ZoneInfoRow };
