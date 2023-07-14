import { useEffect, useState } from 'react';

import cn from 'classnames';

import { ArrowDown, ArrowUp } from 'assets/icons';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { ElementSize } from 'types/ElementSize';

import styles from './Dropdown.module.scss';
import { DropdownProps } from './Dropdown.props';
import { DropdownItem } from './DropdownItem';
import { DropdownOption } from './DropdownOption';
import { DropdownTooltip } from './DropdownTooltip';

function Dropdown({
  initialSelectedKey,
  options,
  onOptionSelected,
  className,
  size = ElementSize.MEDIUM,
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
    <div
      ref={ref}
      className={cn(styles.dropDownContainer, className, {
        [styles.sm]: size === ElementSize.SMALL,
        [styles.md]: size === ElementSize.MEDIUM,
        [styles.lg]: size === ElementSize.LARGE,
      })}
      {...props}
    >
      <DropdownTooltip body={selectedOption.description}>
        <div className={cn(styles.dropDownHeader, { [styles.active]: isVisible })} onClick={toggle}>
          <div className={styles.itemTitle}>{getTitle(selectedOption)}</div>
          {isVisible && <ArrowUp className={styles.arrowIcon} />}
          {!isVisible && <ArrowDown className={styles.arrowIcon} />}
        </div>
      </DropdownTooltip>

      {isVisible && (
        <ul className={styles.dropDownList}>
          {options.map((option: DropdownOption) => (
            <DropdownItem
              key={option.key}
              option={option}
              isActive={option.key === selectedOption.key}
              getTitle={getTitle}
              onOptionClicked={onOptionClicked}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropdown };
