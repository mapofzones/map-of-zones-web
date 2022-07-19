import cn from 'classnames';

import { ExplanationTooltip } from 'components';

import styles from './TableHeaderItem.module.scss';
import { CircleType, TableHeaderItemProps } from './TableHeaderItem.props';

export function TableHeaderItem({
  circleType,
  columnKey,
  explanationText,
  isSelected,
  setSelectedColumnKey,
  title,
  withBorder = false,
}: TableHeaderItemProps) {
  const onClick = () => {
    if (columnKey && !isSelected) {
      setSelectedColumnKey(columnKey);
    }
  };

  return (
    <th
      className={cn({
        [styles.selectable]: !!columnKey,
        [styles.selected]: isSelected,
        [styles.withBorder]: withBorder,
      })}
      onClick={onClick}
    >
      <span>
        {!!circleType && (
          <div
            className={cn(styles.circle, {
              [styles.source]: circleType === CircleType.Source,
              [styles.target]: circleType === CircleType.Target,
            })}
          />
        )}
        {title}
        {explanationText && <ExplanationTooltip text={explanationText} />}
      </span>
    </th>
  );
}
