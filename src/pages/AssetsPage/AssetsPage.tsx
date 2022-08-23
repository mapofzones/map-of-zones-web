import { ScrollUpButton } from 'components';

import styles from './AssetsPage.module.scss';
import { AssetsTable } from './AssetsTable/AssetsTable';
import { AssetsTotalInfo } from './AssetsTotalInfo/AssetsTotalInfo';

export function AssetsPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <AssetsTotalInfo />
      <AssetsTable />

      <ScrollUpButton />
    </div>
  );
}
