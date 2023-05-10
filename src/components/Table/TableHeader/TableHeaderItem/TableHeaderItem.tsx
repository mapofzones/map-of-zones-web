import cn from 'classnames';

import { ExplanationTooltip } from 'ui';

import styles from './TableHeaderItem.module.scss';
import { Align, CircleType, TableHeaderItemProps } from './TableHeaderItem.props';

export function TableHeaderItem<T extends string>({
  align = Align.Right,
  circleType,
  columnKey,
  explanationText,
  isSelected,
  isSticky,
  setSelectedColumnKey,
  title,
  withBorder = false,
}: TableHeaderItemProps<T>) {
  const onClick = () => {
    if (columnKey && !isSelected) {
      setSelectedColumnKey(columnKey);
    }
  };

  return (
    <th
      className={cn({
        [styles.alignLeft]: align === Align.Left,
        [styles.alignCenter]: align === Align.Center,
        [styles.selectable]: !!columnKey,
        [styles.selected]: isSelected,
        [styles.sticky]: isSticky,
        [styles.withBorder]: withBorder,
      })}
      onClick={onClick}
    >
      <div className={styles.contentContainer}>
        {!!circleType && (
          <div
            className={cn(styles.circle, {
              [styles.source]: circleType === CircleType.Source,
              [styles.target]: circleType === CircleType.Target,
            })}
          />
        )}
        <div className={styles.titleContainer}>
          {title}
          {explanationText && <ExplanationTooltip text={explanationText} />}
        </div>
      </div>
    </th>
  );
}
