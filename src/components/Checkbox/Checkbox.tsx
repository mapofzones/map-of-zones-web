import cn from 'classnames';

import styles from './Checkbox.module.scss';

import { CheckboxProps } from '.';

export function Checkbox({
  className,
  checked,
  onCheckedChange,
  children,
  disabled,
}: CheckboxProps): JSX.Element {
  const handleOnChange = () => {
    if (disabled) return;

    onCheckedChange?.(!checked);
  };

  return (
    <label className={cn(styles.label, className)}>
      <input
        id="checkbox"
        checked={checked}
        onChange={handleOnChange}
        type="checkbox"
        disabled={disabled}
      />
      {children}
    </label>
  );
}
