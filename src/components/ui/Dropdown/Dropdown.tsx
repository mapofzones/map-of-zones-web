import { useEffect, useState } from 'react';

import cn from 'classnames';

import { useComponentVisible } from 'hooks/useComponentVisible';
import { ArrowDown, ArrowUp, TickIcon } from 'icons';

import styles from './Dropdown.module.scss';
import { DropdownProps } from './Dropdown.props';
import { DropdownOption } from './DropdownOption';

function Dropdown({
  initialSelectedKey,
  options,
  onOptionSelected,
  className,
  ...props
}: DropdownProps) {
  const { ref, isVisible, setIsVisible } = useComponentVisible<HTMLDivElement>(false);

  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options.find((v) => v.key === initialSelectedKey) ?? options[0]
  );

  const toggle = () => setIsVisible(!isVisible);

  const getTitle = (option: DropdownOption) => option?.title ?? option?.key;

  const onOptionClicked = (option: DropdownOption) => () => {
    onOptionSelected?.(option);
    setSelectedOption(option);
    setIsVisible(false);
  };

  useEffect(() => {
    setSelectedOption((selected) => options.find((opt) => opt.key === selected.key) ?? options[0]);
  }, [options]);

  return (
    <div ref={ref} className={cn(styles.dropDownContainer, className)} {...props}>
      <div className={cn(styles.dropDownHeader, { [styles.active]: isVisible })} onClick={toggle}>
        <div className={styles.itemTitle}>{getTitle(selectedOption)}</div>
        {isVisible ? (
          <ArrowUp className={styles.arrowIcon} />
        ) : (
          <ArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {isVisible && (
        <ul className={styles.dropDownList}>
          {options.map((option: DropdownOption) => (
            <li
              onClick={onOptionClicked(option)}
              key={option.key}
              className={cn(styles.listItem, {
                [styles.active]: option.key === selectedOption.key,
              })}
            >
              <div className={styles.itemTitle}>{getTitle(option)}</div>
              <TickIcon className={styles.tickIcon} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropdown };
