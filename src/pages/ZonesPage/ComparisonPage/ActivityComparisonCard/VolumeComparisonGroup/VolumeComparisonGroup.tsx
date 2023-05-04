import { useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, PeriodKeys } from 'components';
import { useZoneOverviewActivity } from 'pages/ZonesPage/ZonePage/ZoneOverview/ZoneOverviewActivity/useZoneOverviewActivity';
import { ElementSize } from 'types/ElementSize';

import styles from './VolumeComparisonGroup.module.scss';

import { VolumeComparisonGroupProps } from '.';

// type TabKeys = 'ibcVolume' | 'ibcVolumeIn' | 'ibcVolumeOut';
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

export function VolumeComparisonGroup({
  className,
  children,
  ...props
}: VolumeComparisonGroupProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<TabKeys>(TabKeys.IBC_VOLUME);

  const onTabSelected = (item: { key?: TabKeys }) => {
    item?.key && setSelectedTab(item.key);
  };

  const { data: data1, loading: loading1 } = useZoneOverviewActivity(PeriodKeys.DAY, 'cosmoshub-4');
  const { data: data2, loading: loading2 } = useZoneOverviewActivity(PeriodKeys.DAY, 'osmosis-1');
  const { data: data3, loading: loading3 } = useZoneOverviewActivity(PeriodKeys.DAY, '');

  console.log(data1, loading1);
  console.log(data2, loading2);
  console.log(data3, loading3);

  return (
    <>
      <ButtonGroup
        className={styles.groupTabSelector}
        size={ElementSize.SMALL}
        buttons={TAB_OPTION}
        setSelectedButton={onTabSelected}
      />
      {data1 && data1.zone}
      {loading1 && <>Loading</>}
      {data2 && data2.zone}
      {loading2 && <>Loading</>}
      {data3 && data3.zone}
      {loading3 && <>Loading</>}
    </>
  );
}
