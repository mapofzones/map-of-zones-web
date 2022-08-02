import React, { ForwardedRef } from 'react';

import classNames from 'classnames';

import styles from './Burger.module.scss';
import { BurgerProps } from './Burger.props';

function Burger(
  { isOpened, setIsOpened, className }: BurgerProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element {
  const onClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      ref={ref}
      className={classNames(className, styles.container, { [styles.opened]: isOpened })}
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </div>
  );
}

export const BurgerWithRef = React.forwardRef(Burger);
