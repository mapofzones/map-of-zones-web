import { ChangeEvent } from 'react';

import cn from 'classnames';

import { Input } from 'components/Input/Input';
import { SearchIcon } from 'icons';

import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

export function Search({
  initialValue,
  onSearchChange,
  className,
  ...props
}: SearchProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(event.target.value);
  };

  return (
    <div className={cn(styles.searchContainer, className)} {...props}>
      <SearchIcon className={styles.icon} />
      <Input
        className={styles.searchInput}
        placeholder={'Search'}
        value={initialValue}
        onChange={handleChange}
      />
    </div>
  );
}
