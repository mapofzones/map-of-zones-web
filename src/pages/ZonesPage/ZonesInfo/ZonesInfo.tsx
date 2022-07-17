import { ScrollUpButton } from 'components';

import { ZonesTable } from './ZonesTable/ZonesTable';
import { ZonesTotalInfo } from './ZonesTotalInfo/ZonesTotalInfo';

export function ZonesInfo() {
  return (
    <div>
      <ZonesTotalInfo />
      <ZonesTable />

      <ScrollUpButton />
    </div>
  );
}
