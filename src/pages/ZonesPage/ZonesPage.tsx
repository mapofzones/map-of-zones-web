import { ScrollUpButton } from 'components';

import { ZonesTable } from './ZonesTable/ZonesTable';
import { ZonesTotalInfo } from './ZonesTotalInfo/ZonesTotalInfo';

export function ZonesPage() {
  return (
    <div>
      <ZonesTotalInfo />
      <ZonesTable />

      <ScrollUpButton />
    </div>
  );
}
