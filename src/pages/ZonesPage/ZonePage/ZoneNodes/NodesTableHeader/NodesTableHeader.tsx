import { useState } from 'react';

import cn from 'classnames';

import { Search, SkeletonRectangle } from 'components';

import { useNodesTotalInfo } from '../NodesTotalInfo/useNodesTotalInfo';
import { FilterModal } from './FilterModal/FilterModal';
import styles from './NodesTableHeader.module.scss';
import { useNodesCount } from './useNodesCount';

export function NodesTableHeader() {
  const [searchExpanded, setSearchExpanded] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const { data: nodesCount, loading: zonesCountLoading } = useNodesCount();
  const { isp, countries } = useNodesTotalInfo();

  return (
    <div className={styles.header}>
      {!zonesCountLoading && (
        <div className={styles.titleContainer}>
          <span className={styles.title}>{nodesCount} Nodes</span>
        </div>
      )}

      {zonesCountLoading && (
        <div className={styles.titleContainer}>
          <SkeletonRectangle className={cn(styles.title, styles.skeleton)} />
        </div>
      )}

      {!zonesCountLoading && (
        <div className={cn(styles.filtersContainer, { [styles.expanded]: searchExpanded })}>
          <FilterModal title="All ISPs" items={isp} />

          <FilterModal title="All Countries" items={countries} />

          <Search
            className={styles.search}
            onSearchChange={onSearchChange}
            onFocus={() => setSearchExpanded(true)}
            onBlur={() => setSearchExpanded(false)}
            placeholder="Search"
          />
        </div>
      )}
    </div>
  );
}
