import { useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, NumberFormat, NumberType, PeriodKeys, SkeletonRectangle } from 'components';
import { PercentageBar } from 'components/ui/PercentageBar/PercentageBar';
import { ElementSize } from 'types/ElementSize';

import styles from './VolumeComparisonGroup.module.scss';

import { ComparisoinGroupProps, VolumeComparisonGroupProps } from '.';

enum TabKeys {
  IBC_VOLUME = 'ibcVolume',
  IBC_VOLUME_IN = 'ibcVolumeIn',
  IBC_VOLUME_OUT = 'ibcVolumeOut',
}

type Option = {
  key: TabKeys;
  title: string;
};

const TAB_OPTION: Option[] = [
  { key: TabKeys.IBC_VOLUME, title: 'IBC Volume' },
  { key: TabKeys.IBC_VOLUME_IN, title: 'IBC In' },
  { key: TabKeys.IBC_VOLUME_OUT, title: 'IBC Out' },
];

const DATA_PROPRTY_BY_TAB: Record<TabKeys, keyof ComparisoinGroupProps> = {
  [TabKeys.IBC_VOLUME]: 'ibcVolume',
  [TabKeys.IBC_VOLUME_IN]: 'ibcVolumeIn',
  [TabKeys.IBC_VOLUME_OUT]: 'ibcVolumeOut',
};

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

export function VolumeComparisonGroup({
  className,
  children,
  data,
  loading,
  numberType,
  colors,
  ...props
}: VolumeComparisonGroupProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<TabKeys>(TabKeys.IBC_VOLUME);

  const onTabSelected = (item: { key?: TabKeys }) => {
    item?.key && setSelectedTab(item.key);
  };

  const propertyName = DATA_PROPRTY_BY_TAB[selectedTab];
  const maxValue = data ? Math.max(...data.map((item) => item[propertyName] ?? 0)) : undefined;

  return (
    <div className={styles.container}>
      <ButtonGroup
        className={styles.groupTabSelector}
        size={ElementSize.SMALL}
        buttons={TAB_OPTION}
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
              key={item.key}
              zone={item.zoneName}
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
