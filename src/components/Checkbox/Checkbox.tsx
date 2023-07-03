import { useState } from 'react';

import cn from 'classnames';

import styles from './Checkbox.module.scss';

import { CheckboxProps } from '.';

export function Checkbox({ className, children, disabled }: CheckboxProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <label className={cn(styles.label, className)}>
      <input
        id="checkbox"
        checked={isSelected}
        onChange={() => setIsSelected((value) => !value)}
        type="checkbox"
        disabled={disabled}
      />
      {children}
    </label>
  );
}
