import { ChartItemByString } from 'utils/helper';

export interface IbcVolumeCardData {
  ibcVolumeInMainnet?: number;
  ibcVolumeInPendingMainnet?: number;
  ibcVolumeInPercent?: number;
  ibcVolumeMainnet?: number;
  ibcVolumeOutMainnet?: number;
  ibcVolumeOutPendingMainnet?: number;
  ibcVolumeOutPercent?: number;
  ibcVolumeChart?: ChartItemByString[];
}

export interface IbcVolumeCardProps {
  className?: string;
  data?: IbcVolumeCardData;
  hasBorder?: boolean;
  loading: boolean;
  period: string;
  vertical?: boolean;
}
