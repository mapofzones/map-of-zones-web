import { useCallback } from 'react';

import cn from 'classnames';

import { ExplanationTooltip } from 'components';

import { ColumnKeys } from '../Types';
import styles from './TableHeaderItem.module.scss';

export function TableHeaderItem({
  circleType,
  columnKey,
  explanationText,
  isSelected,
  setSelectedColumnKey,
  title,
  withBorder = false,
}: {
  circleType?: string;
  columnKey?: ColumnKeys;
  explanationText?: string;
  isSelected: boolean;
  setSelectedColumnKey: (value: ColumnKeys) => void;
  title: string;
  withBorder?: boolean;
}) {
  const onClick = useCallback(() => {
    if (columnKey && !isSelected) {
      setSelectedColumnKey(columnKey);
    }
  }, [columnKey, isSelected, setSelectedColumnKey]);

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
              [styles.source]: circleType === 'source',
              [styles.target]: circleType === 'target',
            })}
          />
        )}
        {title}
        {explanationText && <ExplanationTooltip text={explanationText} />}
      </span>
    </th>
  );
}
