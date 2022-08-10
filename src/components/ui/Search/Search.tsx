import { ChangeEvent, FocusEvent, useState } from 'react';

import cn from 'classnames';

import { Input } from 'components/ui/Input/Input';
import { SearchIcon } from 'icons';

import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

export function Search({
  onSearchChange,
  onFocus,
  onBlur,
  className,
  placeholder = 'Search',
  ...props
}: SearchProps): JSX.Element {
  const [enteredText, setEnteredText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredText(event.target.value);
    onSearchChange?.(event.target.value);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  return (
    <div className={cn(styles.searchContainer, className)} {...props}>
      <Input
        className={styles.searchInput}
        type="search"
        placeholder={placeholder}
        value={enteredText || ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchIcon className={styles.loopIcon} />
    </div>
  );
}
