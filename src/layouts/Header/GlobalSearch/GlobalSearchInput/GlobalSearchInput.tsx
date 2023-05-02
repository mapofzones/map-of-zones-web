import cn from 'classnames';

import { SearchIcon } from 'assets/icons';
import { Search } from 'components';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './GlobalSearchInput.module.scss';

import { GlobalSearchInputProps } from '.';

export function GlobalSearchInput({
  className,
  onCancel,
  onClick,
  ...props
}: GlobalSearchInputProps) {
  const isTablet = useTabletSmallMediaQuery();

  return (
    <div className={cn(className, styles.container)} onClick={onClick}>
      <SearchIcon className={styles.loopIcon} />
      <Search
        className={styles.search}
        placeholder="Search and analyze zones"
        showIcon={false}
        {...props}
      />
      {isTablet && (
        <div className={styles.cancelBtn} onClick={onCancel}>
          Cancel
        </div>
      )}
    </div>
  );
}
