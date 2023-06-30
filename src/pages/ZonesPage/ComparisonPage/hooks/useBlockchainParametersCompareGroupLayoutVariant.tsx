import { useMediaQuery } from 'hooks/useMediaQuery';

export function useBlockchainParametersCompareGroupLayoutVariant() {
  const isRows2Layout = useMediaQuery('(min-width: 881px) and (max-width: 1280px)');
  const compareGroupVariant = isRows2Layout ? 'rows-2' : 'columns-3';
  return compareGroupVariant;
}
