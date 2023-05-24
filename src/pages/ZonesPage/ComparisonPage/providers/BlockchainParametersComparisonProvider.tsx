import { ReactNode, createContext, useContext } from 'react';

import {
  ZonesComparisonInterchainResult,
  useTokenSupplyComparison,
} from '../hooks/useTokenSupplyComparison';

const BlockchainParametersContext = createContext<ZonesComparisonInterchainResult>(
  {} as ZonesComparisonInterchainResult
);

export function BlockchainParametersComparisonProvider({
  zones,
  children,
}: {
  zones: string[];
  children: ReactNode;
}) {
  const data: ZonesComparisonInterchainResult = useTokenSupplyComparison(zones);

  return (
    <BlockchainParametersContext.Provider value={data}>
      {children}
    </BlockchainParametersContext.Provider>
  );
}

export const useBlockchainParametersComparison = () => useContext(BlockchainParametersContext);
