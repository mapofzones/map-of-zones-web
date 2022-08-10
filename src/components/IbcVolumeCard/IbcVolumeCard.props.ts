export interface IbcVolumeCardData {
  ibcVolumeInMainnet?: number;
  ibcVolumeInPendingMainnet?: number;
  ibcVolumeInPercent?: number;
  ibcVolumeMainnet?: number;
  ibcVolumeOutMainnet?: number;
  ibcVolumeOutPendingMainnet?: number;
  ibcVolumeOutPercent?: number;
}

export interface IbcVolumeCardProps {
  className?: string;
  data?: IbcVolumeCardData;
  hasBorder?: boolean;
  loading: boolean;
  period: string;
}
