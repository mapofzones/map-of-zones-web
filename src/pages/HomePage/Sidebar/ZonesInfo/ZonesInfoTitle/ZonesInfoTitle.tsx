import { useState } from 'react';

import cn from 'classnames';

import { SearchIcon } from 'assets/icons';
import { Search, SkeletonTextWrapper } from 'components';

import { ZoneInfoTitleProps } from './ZoneInfoTitle.props';
import styles from './ZonesInfoTitle.module.scss';
import { useSearchApiState, useSearchState } from '../ZoneTitleSearchProvider';

export function ZonesInfoTitle({ loading, zonesCount }: ZoneInfoTitleProps): JSX.Element {
  const searchValue = useSearchState();
  const { setSearchValue } = useSearchApiState();

  const [searchExpanded, setSearchExpanded] = useState<boolean>(!!searchValue);

  const onBlur = () => {
    if (!searchValue) {
      setSearchExpanded(false);
    }
  };

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

          <div className={styles.iconWrapper} onClick={() => setSearchExpanded(true)}>
            <SearchIcon className={styles.loopIcon} />
          </div>
        </>
      )}

      {searchExpanded && (
        <Search
          autoFocus
          className={styles.search}
          initialValue={searchValue}
          onSearchChange={setSearchValue}
          onBlur={onBlur}
        />
      )}
    </div>
  );
}
