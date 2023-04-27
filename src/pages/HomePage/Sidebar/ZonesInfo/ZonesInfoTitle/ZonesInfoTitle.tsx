import { useState } from 'react';

import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';

import { SearchIcon } from 'assets/icons';
import { Search, SkeletonTextWrapper } from 'components';

import { ZoneInfoTitleProps } from './ZoneInfoTitle.props';
import styles from './ZonesInfoTitle.module.scss';

export function ZonesInfoTitle({
  loading,
  searchValue,
  onSearchChange,
  zonesCount,
}: ZoneInfoTitleProps): JSX.Element {
  const [searchParams] = useSearchParams();

  const [searchExpanded, setSearchExpanded] = useState(!!searchParams.get('searchZone'));

  return (
    <div className={cn(styles.container)}>
      {!searchExpanded && (
        <>
          <div className={styles.zonesCountInfo}>
            <SkeletonTextWrapper loading={loading} defaultText={'00'}>
              {zonesCount}
            </SkeletonTextWrapper>
            &nbsp;Zones
          </div>

          <SearchIcon className={styles.loopIcon} onClick={() => setSearchExpanded(true)} />
        </>
      )}

      {searchExpanded && (
        <Search
          autoFocus
          className={styles.search}
          initialValue={searchValue}
          onSearchChange={onSearchChange}
        />
      )}
    </div>
  );
}
