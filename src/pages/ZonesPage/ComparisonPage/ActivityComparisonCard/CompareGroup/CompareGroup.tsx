import { useState } from 'react';

import cn from 'classnames';

import { ElementSize } from 'types/ElementSize';
import { ButtonGroup, SkeletonRectangle } from 'ui';
import { keys } from 'utils/mergeChartArraysIntoOne';

import styles from './CompareGroup.module.scss';
import { CompareRowItem } from './CompareRowItem';

import { VolumeComparisonGroupProps } from '.';

const ZONES_COLORS = ['#62D0D7', '#B250FF', '#FF9900'];

export function CompareGroup<K>({
  className,
  data,
  metadata,
  zones,
  loading,
  numberType,
  ...props
}: VolumeComparisonGroupProps<K>): JSX.Element {
  const [selectedProperty, setSelectedProperty] = useState<keyof K>(keys(metadata)[0]);

  const onTabSelected = (item: { key?: keyof K }) => {
    item?.key && setSelectedProperty(item.key);
  };

  const maxValue = data ? Math.max(...data.map((item) => item[selectedProperty] ?? 0)) : undefined;
  const tabOptions = keys(metadata).map((key: keyof K) => {
    return { key: key, title: metadata[key].title };
  });

  return (
    <div className={cn(className, styles.container)} {...props}>
      <ButtonGroup<keyof K>
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
              rate={
                item[selectedProperty] && maxValue ? (item[selectedProperty] ?? 0) / maxValue : 0
              }
              value={item[selectedProperty]}
              color={ZONES_COLORS[index]}
              numberType={numberType}
            />
          ))}
      </div>
    </div>
  );
}
