import cn from 'classnames';

import styles from './Divider.module.scss';

export function Divider({
  horizontal = false,
  size = 16,
  className,
}: {
  horizontal?: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn(className, styles.divider, {
        [styles.horizontal]: horizontal,
      })}
      style={{
        marginLeft: !horizontal ? size : 0,
        marginRight: !horizontal ? size : 0,
        marginTop: horizontal ? size : 0,
        marginBottom: horizontal ? size : 0,
      }}
    />
  );
}
