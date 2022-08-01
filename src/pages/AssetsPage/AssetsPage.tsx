import { ScrollUpButton } from 'components';

import { AssetsTotalInfo } from './AssetsTotalInfo/AssetsTotalInfo';

export function AssetsPage(): JSX.Element {
  return (
    <div>
      <AssetsTotalInfo />

      <ScrollUpButton />
    </div>
  );
}
