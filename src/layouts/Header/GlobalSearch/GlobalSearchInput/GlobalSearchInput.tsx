import cn from 'classnames';

import { ArrowBack, SearchIcon } from 'assets/icons';
import { CompareModeSwitcher } from 'components/CompareModeSwitcher';
import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';
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
  const isTablet = useTabletMediumMediaQuery();
  const compareBtnText = isTablet ? 'Compare' : 'Compare Zones';

  return (
    <div className={cn(styles.container, className)} onClick={onClick}>
      {isTablet && <ArrowBack className={styles.arrowBack} onClick={onCancel} />}

      {!isTablet && <SearchIcon className={styles.loopIcon} />}
      <Search
        className={styles.search}
        placeholder="Search and analyze zones"
        showIcon={false}
        {...props}
      />
      {showCompareSwitcher && <CompareModeSwitcher text={compareBtnText} />}
    </div>
  );
}
