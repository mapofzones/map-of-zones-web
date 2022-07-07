import { useState } from 'react';

import cn from 'classnames';

import { ArrowDown, ArrowUp, TickIcon } from 'icons';

import styles from './Dropdown.module.scss';
import { DropdownProps } from './Dropdown.props';

function Dropdown<T>({
  initialSelectedKey,
  options,
  onOptionSelected,
  keyExtractor,
  titleExtractor,
  className,
  ...props
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<T>(
    options.find((v) => keyExtractor(v) === initialSelectedKey) ?? options[0]
  );

  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: T) => () => {
    setSelectedOption(option);
    onOptionSelected?.(keyExtractor(option));
    setIsOpen(false);
  };

  return (
    <div className={cn(styles.dropDownContainer, className)} {...props}>
      <div className={cn(styles.dropDownHeader, { [styles.active]: isOpen })} onClick={toggle}>
        <div className={styles.itemTitle}>
          {titleExtractor?.(selectedOption) || keyExtractor(selectedOption)}
        </div>
        {isOpen ? (
          <ArrowUp className={styles.arrowIcon} />
        ) : (
          <ArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {isOpen && (
        <ul className={styles.dropDownList}>
          {options.map((option: T) => (
            <li
              onClick={onOptionClicked(option)}
              key={keyExtractor(option)}
              className={cn(styles.listItem, {
                [styles.active]: keyExtractor(option) === keyExtractor(selectedOption),
              })}
            >
              <div className={styles.itemTitle}>
                {titleExtractor?.(option) || keyExtractor(option)}
              </div>
              <TickIcon className={styles.tickIcon} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropdown };
