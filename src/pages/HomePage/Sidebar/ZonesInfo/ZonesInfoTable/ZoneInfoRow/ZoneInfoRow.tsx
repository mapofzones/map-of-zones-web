import cn from 'classnames';

import { LinkWithQuery, NumberFormat, NumberType, ZoneLogo, SkeletonLine } from 'components';
import { PendingIcon } from 'icons';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({
  zone,
  numberType = NumberType.Number,
  className,
  ...props
}: ZonesInfoRowProps): JSX.Element {
  return (
    <LinkWithQuery to={`${zone.id}/overview`}>
      <div className={cn(styles.row, className)} {...props}>
        {/* TODO: separate component */}
        <div className={styles.zoneBaseInfoContainer}>
          <ZoneLogo
            logoUrl={zone.logoUrl}
            name={zone.name}
            size={'32px'}
            className={styles.zoneLogo}
          />
          {zone.name}
          {!!zone.ratingDiff && (
            <div className={cn(styles.ratingDiff, { [styles.negative]: zone.ratingDiff < 0 })}>
              <div
                className={cn(styles.triangle, {
                  [styles.triangleUp]: zone.ratingDiff > 0,
                  [styles.triangleDown]: zone.ratingDiff < 0,
                })}
              />
              {Math.abs(zone.ratingDiff)}
            </div>
          )}
        </div>

        {/* TODO: separate component */}
        <div className={styles.valueContainer}>
          <NumberFormat
            className={cn(styles.value, 'text-align')}
            value={zone.value}
            numberType={numberType}
          />
          {zone.pendingValue != null && (
            <span className={cn(styles.pendingValueContainer, 'text-align')}>
              <PendingIcon />
              <span className={styles.pendingValue}>
                <NumberFormat value={zone.pendingValue} numberType={numberType} />
              </span>
            </span>
          )}
        </div>
      </div>
    </LinkWithQuery>
  );
}

export function ZoneInfoRowLoader() {
  return (
    <div className={styles.row}>
      <div className={styles.zoneBaseInfoContainer}>
        <ZoneLogo loading={true} size={'32px'} />
        <SkeletonLine
          style={{ marginLeft: '16px' }}
          loading={true}
          defaultValueMinLength={5}
          defaultValueMaxLength={10}
        />
      </div>
      <SkeletonLine loading={true} defaultValue={'$123,456,789'} />
    </div>
  );
}

export { ZoneInfoRow };
