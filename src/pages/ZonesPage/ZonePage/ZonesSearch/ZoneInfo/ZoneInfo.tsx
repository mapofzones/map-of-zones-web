import React from 'react';

import cn from 'classnames';

import { LinkWithQuery, ZoneLogo } from 'components';

import styles from './ZoneInfo.module.scss';
import { ZoneInfoProps } from './ZoneInfo.props';

export function ZoneInfo({ currentZone, searchValue, zone }: ZoneInfoProps): JSX.Element {
  const names = searchValue
    ? zone.name.split(new RegExp(`(${searchValue})`, 'gi')).filter((part: string) => !!part)
    : [zone.name];

  return (
    <LinkWithQuery
      className={cn(styles.container, { [styles.active]: currentZone?.zone === zone.zone })}
      to={`/zones/${zone.zone}/overview`}
    >
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
    </LinkWithQuery>
  );
}
