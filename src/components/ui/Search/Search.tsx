import { ChangeEvent, FocusEvent, useState } from 'react';

import cn from 'classnames';

import { SearchIcon } from 'assets/icons';
import { Input } from 'components/ui/Input/Input';

import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

export function Search({
  autoFocus = false,
  className,
  initialValue = '',
  onBlur,
  onFocus,
  onSearchChange,
  placeholder = 'Search',
  showIcon = true,
  ...props
}: SearchProps): JSX.Element {
  const [enteredText, setEnteredText] = useState(initialValue);

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
        autoFocus={autoFocus}
        className={styles.searchInput}
        type="search"
        placeholder={placeholder}
        value={enteredText || ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showIcon && <SearchIcon className={styles.loopIcon} />}
    </div>
  );
}
