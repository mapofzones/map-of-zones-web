import cn from 'classnames';

import { SearchIcon } from 'assets/icons';
import { CompareModeSwitcher } from 'components/CompareModeSwitcher';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { Search } from 'ui';

import styles from './GlobalSearchInput.module.scss';

import { GlobalSearchInputProps } from '.';

export function GlobalSearchInput({
  className,
  showCompareSwitcher = false,
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

      {showCompareSwitcher && <CompareModeSwitcher />}

      {isTablet && (
        <div className={styles.cancelBtn} onClick={onCancel}>
          Cancel
        </div>
      )}
    </div>
  );
}
