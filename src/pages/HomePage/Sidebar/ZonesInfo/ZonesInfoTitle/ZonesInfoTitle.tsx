import { useState } from 'react';

import cn from 'classnames';

import { Search, SkeletonTextWrapper } from 'components';

import { ZoneInfoTitleProps } from './ZoneInfoTitle.props';
import styles from './ZonesInfoTitle.module.scss';

export function ZonesInfoTitle({
  loading,
  searchValue,
  onSearchChange,
  zonesCount,
}: ZoneInfoTitleProps): JSX.Element {
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <div className={cn(styles.container, { [styles.expanded]: searchExpanded })}>
      <div className={styles.zonesCountInfo}>
        <SkeletonTextWrapper loading={loading} defaultText={'00'}>
          {zonesCount}
        </SkeletonTextWrapper>
        &nbsp;Zones
      </div>

      <Search
        className={styles.search}
        initialValue={searchValue}
        onSearchChange={onSearchChange}
        onFocus={() => setSearchExpanded(true)}
        onBlur={() => setSearchExpanded(false)}
      />
    </div>
  );
}
