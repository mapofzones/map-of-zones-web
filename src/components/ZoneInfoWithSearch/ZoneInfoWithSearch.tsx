import React from 'react';

import cn from 'classnames';

import { RatingDiffTriangle } from 'components/RatingDiffTriangle/RatingDiffTriangle';
import { ZoneLogo } from 'components/ZoneLogo/ZoneLogo';

import styles from './ZoneInfoWithSearch.module.scss';
import { ZoneInfoWithSearchProps } from './ZoneInfoWithSearch.props';

export function ZoneInfoWithSearch({
  className,
  searchValue,
  zone,
}: ZoneInfoWithSearchProps): JSX.Element {
  const names = searchValue
    ? zone.name.split(new RegExp(`(${searchValue})`, 'gi')).filter((part: string) => !!part)
    : [zone.name];

  return (
    <div className={cn(styles.container, className)}>
      <ZoneLogo className={styles.logo} logoUrl={zone.logoUrl} />
      {names.map((value, index) => {
        const key = `${zone.name}_${index}`;
        if (value.toLowerCase() === searchValue?.toLowerCase() || names.length <= 1) {
          return <React.Fragment key={key}>{value}</React.Fragment>;
        }
        return (
          <span className={styles.nameNotActive} key={key}>
            {value}
          </span>
        );
      })}

      <RatingDiffTriangle className={styles.ratingDiff} ratingDiff={zone.ratingDiff} />
    </div>
  );
}
