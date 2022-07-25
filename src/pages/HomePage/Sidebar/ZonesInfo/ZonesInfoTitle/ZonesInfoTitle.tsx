import { useState } from 'react';

import cn from 'classnames';

import { Search, SkeletonTextWrapper } from 'components';

import styles from './ZonesInfoTitle.module.scss';

export function ZonesInfoTitle({ loading, zonesCount, onSearchChange }: any) {
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <div className={cn(styles.container, { [styles.expanded]: searchExpanded })}>
      <span className={styles.zonesCountInfo}>
        <SkeletonTextWrapper loading={loading} defaultText={'00'}>
          {zonesCount}
        </SkeletonTextWrapper>
        {' Zones'}
      </span>

      <Search
        className={styles.search}
        onSearchChange={onSearchChange}
        onFocus={() => setSearchExpanded(true)}
        onBlur={() => setSearchExpanded(false)}
      />
    </div>
  );
}
