import { ScrollUpButton } from 'components';

import { AssetsTable } from './AssetsTable/AssetsTable';
import { AssetsTotalInfo } from './AssetsTotalInfo/AssetsTotalInfo';

export function AssetsPage(): JSX.Element {
  return (
    <>
      <AssetsTotalInfo />
      <AssetsTable />

      <ScrollUpButton />
    </>
  );
}
