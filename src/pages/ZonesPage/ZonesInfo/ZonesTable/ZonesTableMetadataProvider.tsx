import { ReactNode, createContext, useContext } from 'react';

import { ConfigItem } from 'components/Table/TableHeader/TableHeader.props';

export interface IZonesTableMetadata<TKey extends string> {
  isComparisonMode?: boolean;
  headerMetadata: ConfigItem<TKey>[];
  selectedColumnKey: TKey;
  setSelectedColumnKey: (value: TKey) => void;
  isCheckedFunc?: (zoneKey: string) => boolean;
  onCheckedChange?: (zoneKey: string, checked: boolean) => void;
}

const ZonesTableMetadataContext = createContext<IZonesTableMetadata<any>>(
  {} as IZonesTableMetadata<any>
);

export const useTableMetadata = () => useContext(ZonesTableMetadataContext);

export function ZonesTableMetadataProvider<TKey extends string>({
  children,
  isComparisonMode,
  headerMetadata,
  selectedColumnKey,
  isCheckedFunc,
  onCheckedChange,
  setSelectedColumnKey,
}: { children: ReactNode } & IZonesTableMetadata<TKey>) {
  return (
    // add several providers for group of preperties to improve performance
    <ZonesTableMetadataContext.Provider
      value={{
        isComparisonMode,
        headerMetadata,
        selectedColumnKey,
        isCheckedFunc,
        onCheckedChange,
        setSelectedColumnKey,
      }}
    >
      {children}
    </ZonesTableMetadataContext.Provider>
  );
}
