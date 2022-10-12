import { useState } from 'react';

import cn from 'classnames';

import { ArrowDown, ArrowUp } from 'assets/icons';
import { Search, SkeletonRectangle } from 'components';

import styles from './NodesTableHeader.module.scss';
import { useNodesCount } from './useNodesCount';

export function NodesTableHeader() {
  const [searchExpanded, setSearchExpanded] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const { data: nodesCount, loading: zonesCountLoading } = useNodesCount();

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
          <div className={styles.dropdown}>
            All ISPs
            {false ? (
              <ArrowUp className={styles.arrowIcon} />
            ) : (
              <ArrowDown className={styles.arrowIcon} />
            )}
          </div>

          <div className={styles.dropdown}>
            All Countries
            {false ? (
              <ArrowUp className={styles.arrowIcon} />
            ) : (
              <ArrowDown className={styles.arrowIcon} />
            )}
          </div>

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
