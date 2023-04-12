import cn from 'classnames';

import { Search } from 'components';

import styles from './GlobalSearchInput.module.scss';

import { GlobalSearchInputProps } from '.';

export function GlobalSearchInput({ className, ...props }: GlobalSearchInputProps) {
  return (
    <Search
      className={cn(className, styles.search)}
      placeholder="Search zones"
      showIcon={false}
      {...props}
    />
  );
}
