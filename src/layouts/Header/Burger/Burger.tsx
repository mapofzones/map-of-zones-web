import classNames from 'classnames';

import styles from './Burger.module.scss';

export function Burger({ isOpened, setIsOpened, className }: any): JSX.Element {
  const onClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      className={classNames(className, styles.container, { [styles.opened]: isOpened })}
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </div>
  );
}
