import { useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, NumberFormat, NumberType, PeriodKeys, SkeletonRectangle } from 'components';
import { PercentageBar } from 'components/ui/PercentageBar/PercentageBar';
import { ElementSize } from 'types/ElementSize';
import { keys } from 'utils/mergeChartArraysIntoOne';

import styles from './VolumeComparisonGroup.module.scss';

import { VolumeComparisonGroupProps } from '.';

function CompareRowItem({
  zone,
  rate,
  value,
  color,
  numberType = NumberType.Number,
}: {
  zone: string;
  rate?: number;
  value?: number;
  color: string;
  numberType?: NumberType;
}) {
  return (
    <>
      <span>{zone}</span>
      <PercentageBar rate={rate} color={color} />
      <NumberFormat compact value={value} numberType={numberType} />
    </>
  );
}

export function VolumeComparisonGroup<T extends string, K>({
  className,
  children,
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
    <div className={styles.container}>
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
