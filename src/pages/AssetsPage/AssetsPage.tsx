import { ScrollUpButton } from 'components';

import { AssetsTable } from './AssetsTable/AssetsTable';
import { AssetsTotalInfo } from './AssetsTotalInfo/AssetsTotalInfo';

export function AssetsPage(): JSX.Element {
  return (
    <div>
      <AssetsTotalInfo />
      <AssetsTable />

      <ScrollUpButton />
    </div>
  );
}
