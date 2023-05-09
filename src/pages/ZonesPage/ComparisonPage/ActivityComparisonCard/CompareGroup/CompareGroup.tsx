import { useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, SkeletonRectangle } from 'components';
import { ElementSize } from 'types/ElementSize';
import { keys } from 'utils/mergeChartArraysIntoOne';

import styles from './CompareGroup.module.scss';
import { CompareRowItem } from './CompareRowItem';

import { VolumeComparisonGroupProps } from '.';

export function CompareGroup<T extends string, K>({
  className,
  data,
  metadata,
  zones,
  loading,
  numberType,
  colors,
  ...props
}: VolumeComparisonGroupProps<T, K>): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<T>(keys(metadata)[0]);

  const onTabSelected = (item: { key?: T }) => {
    item?.key && setSelectedTab(item.key);
  };

  const propertyName = metadata[selectedTab].property;
  const maxValue = data ? Math.max(...data.map((item) => item[propertyName] ?? 0)) : undefined;
  const tabOptions = keys(metadata).map((key: T) => {
    return { key, title: metadata[key].title };
  });

  return (
    <div className={cn(className, styles.container)} {...props}>
      <ButtonGroup
        className={styles.groupTabSelector}
        size={ElementSize.SMALL}
        buttons={tabOptions}
        setSelectedButton={onTabSelected}
      />

      {loading && (
        <div>
          <SkeletonRectangle className={styles.skeletonItem} />
          <SkeletonRectangle className={styles.skeletonItem} />
          <SkeletonRectangle className={styles.skeletonItem} />
        </div>
      )}

      <div className={styles.compareGroup}>
        {!loading &&
          data &&
          data.map((item, index) => (
            <CompareRowItem
              key={zones[index].zone}
              zone={zones[index].zoneName}
              rate={item[propertyName] && maxValue ? (item[propertyName] ?? 0) / maxValue : 0}
              value={item[propertyName]}
              color={colors[index]}
              numberType={numberType}
            />
          ))}
      </div>
    </div>
  );
}
