import { ReactNode, createContext, useContext } from 'react';

import { ConfigItem } from 'components/Table/TableHeader/TableHeader.props';

export interface IZonesTableMetadata<TKey extends string> {
  headerMetadata: ConfigItem<TKey>[];
  selectedColumnKey: TKey;
  setSelectedColumnKey: (value: TKey) => void;
}

const ZonesTableMetadataContext = createContext<IZonesTableMetadata<any>>(
  {} as IZonesTableMetadata<any>
);

export const useTableMetadata = () => useContext(ZonesTableMetadataContext);

export function ZonesTableMetadataProvider<TKey extends string>({
  children,
  headerMetadata,
  selectedColumnKey,
  setSelectedColumnKey,
}: { children: ReactNode } & IZonesTableMetadata<TKey>) {
  return (
    // add several providers for group of preperties to improve performance
    <ZonesTableMetadataContext.Provider
      value={{
        headerMetadata,
        selectedColumnKey,
        setSelectedColumnKey,
      }}
    >
      {children}
    </ZonesTableMetadataContext.Provider>
  );
}
