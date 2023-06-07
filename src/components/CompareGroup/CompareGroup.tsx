import { useState } from 'react';

import cn from 'classnames';

import { ElementSize } from 'types/ElementSize';
import { ButtonGroup, SkeletonRectangle } from 'ui';
import { keys } from 'utils/mergeChartArraysIntoOne';

import styles from './CompareGroup.module.scss';
import { CompareRowItem } from './CompareRowItem';

import { VolumeComparisonGroupProps } from '.';

export function CompareGroup<K>({
  className,
  metadata,
  data,
  loading,
  zonesDetailsByKey,
  ...props
}: VolumeComparisonGroupProps<K>): JSX.Element {
  const [selectedProperty, setSelectedProperty] = useState<keyof K>(keys(metadata)[0]);

  const onTabSelected = (item: { key?: keyof K }) => {
    item?.key && setSelectedProperty(item.key);
  };

  const maxValue: number | undefined = data
    ? Math.max(...data.map((item) => item[selectedProperty] ?? 0))
    : undefined;
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
          data.map((item) => (
            <CompareRowItem
              key={item.zone}
              zone={zonesDetailsByKey[item.zone]?.title}
              rate={
                item[selectedProperty] && maxValue ? (item[selectedProperty] ?? 0) / maxValue : 0
              }
              value={item[selectedProperty]}
              color={zonesDetailsByKey[item.zone]?.color ?? '#62D0D7'}
              numberType={metadata[selectedProperty]?.numberType}
            />
          ))}
      </div>
    </div>
  );
}
