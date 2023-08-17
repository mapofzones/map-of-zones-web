import React, { useState } from 'react';

import cn from 'classnames';

import { ElementSize } from 'types/ElementSize';
import { ButtonGroup, NumberFormat, SkeletonRectangle } from 'ui';
import { PercentageBar } from 'ui/PercentageBar';
import { keys } from 'utils/mergeChartArraysIntoOne';

import styles from './CompareGroup.module.scss';

import { VolumeComparisonGroupProps } from '.';

export function CompareGroup<K>({
  className,
  metadata,
  data,
  loading,
  zonesDetailsByKey,
  layoutVariant: variant = 'columns-3',
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
        size={ElementSize.MEDIUM}
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

      <div className={cn(styles.compareGroup, styles[variant])}>
        {!loading &&
          data &&
          data.map((item) => (
            <React.Fragment key={item.zone}>
              <span className={styles.title}>{zonesDetailsByKey[item.zone]?.title}</span>
              <PercentageBar
                className={styles.bar}
                rate={
                  item[selectedProperty] && maxValue ? (item[selectedProperty] ?? 0) / maxValue : 0
                }
                color={zonesDetailsByKey[item.zone]?.color ?? '#62D0D7'}
              />

              <NumberFormat
                className={styles.value}
                compact
                value={item[selectedProperty]}
                numberType={metadata[selectedProperty]?.numberType}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
