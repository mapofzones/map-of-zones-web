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

  const [internalSearchValue, setInternalSearchValue] = useState(searchValue);

  const [searchExpanded, setSearchExpanded] = useState(!!searchParams.get('searchZone'));

  const onInternalSearchChange = (value: string) => {
    setInternalSearchValue(value);
    onSearchChange(value);
  };

  const onBlur = () => {
    if (!internalSearchValue) {
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
          initialValue={internalSearchValue}
          onSearchChange={onInternalSearchChange}
          onBlur={onBlur}
        />
      )}
    </div>
  );
}
