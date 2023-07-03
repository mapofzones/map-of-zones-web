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
  return (
    <label className={cn(styles.label, className)}>
      <input
        id="checkbox"
        checked={checked}
        onChange={() => onCheckedChange?.(!checked)}
        type="checkbox"
        disabled={disabled}
      />
      {children}
    </label>
  );
}
