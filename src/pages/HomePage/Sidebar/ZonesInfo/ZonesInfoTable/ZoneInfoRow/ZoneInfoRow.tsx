import React from 'react';

import cn from 'classnames';

import { LinkWithQuery, NumberFormat, NumberType, RatingDiffTriangle, ZoneLogo } from 'components';
import { PendingIcon } from 'icons';

import styles from './ZoneInfoRow.module.scss';
import { ZonesInfoRowProps } from './ZoneInfoRow.props';

function ZoneInfoRow({
  zone,
  searchValue,
  numberType = NumberType.Number,
  className,
  ...props
}: ZonesInfoRowProps): JSX.Element {
  const names = searchValue
    ? zone.name.split(new RegExp(`(${searchValue})`, 'gi')).filter((part: string) => !!part)
    : [zone.name];

  return (
    <LinkWithQuery to={`${zone.id}/overview`} className={cn(styles.row, className)} {...props}>
      {/* TODO: separate component */}
      <div className={styles.zoneBaseInfoContainer}>
        <ZoneLogo
          logoUrl={zone.logoUrl}
          name={zone.name}
          size={'32px'}
          className={styles.zoneLogo}
        />
        <div className={styles.name}>
          {names.map((value, index) => {
            const key = `${zone.name}_${index}`;
            if (value.toLowerCase() === searchValue?.toLowerCase() || names.length <= 1) {
              return <React.Fragment key={key}>{value}</React.Fragment>;
            }
            return (
              <span className={styles.notActive} key={key}>
                {value}
              </span>
            );
          })}
        </div>

        <RatingDiffTriangle className={styles.ratingDiff} ratingDiff={zone.ratingDiff} />
      </div>

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
    </LinkWithQuery>
  );
}

export { ZoneInfoRow };
