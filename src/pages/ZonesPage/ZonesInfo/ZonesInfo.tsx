import { ScrollUpButton } from 'components';

import { ZonesPageTitle } from './ZonesPageTitle/ZonesPageTitle';
import { ZonesTable } from './ZonesTable/ZonesTable';
import { ZonesTotalInfo } from './ZonesTotalInfo/ZonesTotalInfo';

export function ZonesInfo() {
  return (
    <>
      <ZonesTotalInfo />

      <ZonesPageTitle />

      <ZonesTable />

      <ScrollUpButton />
    </>
  );
}
