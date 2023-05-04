import { useEffect, useState } from 'react';

import cn from 'classnames';

import { ButtonGroup, NumberFormat, NumberType, PeriodKeys } from 'components';
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

function PercentageBar({ rate, color }: { rate?: number; color: string }) {
  return (
    <div className={styles.percentageBarContainer}>
      {rate && (
        <div
          className={styles.percentageBarLine}
          style={{
            width: `${rate * 100}%`,
            backgroundColor: color,
            borderTopRightRadius: rate === 1 ? 4 : 0,
            borderBottomRightRadius: rate === 1 ? 4 : 0,
          }}
        />
      )}
    </div>
  );
}

function CompareRowItem({
  zone,
  rate,
  value,
  color,
  numberType = NumberType.Number,
}: {
  zone: string;
  rate?: number;
  value: number;
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
  ...props
}: VolumeComparisonGroupProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<TabKeys>(TabKeys.IBC_VOLUME);

  const onTabSelected = (item: { key?: TabKeys }) => {
    item?.key && setSelectedTab(item.key);
  };

  const zone1 = 'cosmoshub-4';
  const zone2 = 'osmosis-1';
  const zone3 = 'columbus-5';

  const { data: item1, loading: loading1 } = useZoneOverviewActivity(PeriodKeys.DAY, zone1);
  const { data: data2, loading: loading2 } = useZoneOverviewActivity(PeriodKeys.DAY, zone2);
  const { data: data3, loading: loading3 } = useZoneOverviewActivity(PeriodKeys.DAY, zone3);

  console.log(item1, loading1);
  console.log(data2, loading2);
  console.log(data3, loading3);

  const [rates, setRates] = useState<{ [key: string]: number | undefined }>({});

  useEffect(() => {
    const maxValue = Math.max(item1?.ibcVolume ?? 0, data2?.ibcVolume ?? 0, data3?.ibcVolume ?? 0);
    setRates({
      [zone1]: item1?.ibcVolume ? item1?.ibcVolume / maxValue : undefined,
      [zone2]: data2?.ibcVolume ? data2?.ibcVolume / maxValue : undefined,
      [zone3]: data3?.ibcVolume ? data3?.ibcVolume / maxValue : undefined,
    });
  }, [data2?.ibcVolume, data3?.ibcVolume, item1?.ibcVolume]);

  return (
    <div className={styles.container}>
      <ButtonGroup
        className={styles.groupTabSelector}
        size={ElementSize.SMALL}
        buttons={TAB_OPTION}
        setSelectedButton={onTabSelected}
      />
      <div className={styles.compareGroup}>
        {item1 && (
          <CompareRowItem
            zone={item1.zone}
            rate={rates[item1.zone]}
            value={item1.ibcVolume}
            color="#62D0D7"
            numberType={NumberType.Number}
          />
        )}
        {loading1 && <>Loading</>}
        {data2 && (
          <CompareRowItem
            zone={data2.zone}
            rate={rates[data2.zone]}
            value={data2.ibcVolume}
            color="#B250FF"
            numberType={NumberType.Number}
          />
        )}
        {loading2 && <>Loading</>}
        {data3 && (
          <CompareRowItem
            zone={data3.zone}
            rate={rates[data3.zone]}
            value={data3.ibcVolume}
            color="#FF9900"
            numberType={NumberType.Number}
          />
        )}
        {loading3 && <>Loading</>}
      </div>
    </div>
  );
}
