import { ReactElement } from 'react';

import { ZoneData } from 'hooks/queries/useZonesData';

interface ClickableComponentWithClassName<T> {
  className?: string;
  onClick?: React.MouseEventHandler<T> | undefined;
}

type MaybeArray<T> = T[] | T;

type ChildrenOfSelectorWrapper<T> = MaybeArray<ReactElement<ClickableComponentWithClassName<T>>>;

export interface ZonesSelectorWrapperProps {
  className?: string;
  children?: ChildrenOfSelectorWrapper<HTMLButtonElement>;
  zonesList: ZoneData[];
  onModalStateChanged?: (opened: boolean) => void;
  onZoneSelected: (zone: string) => void;
}
