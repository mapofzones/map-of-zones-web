import { ZoneInfoRow } from '../index';

function ZonesInfoTable() {
  return (
    <>
      <ZoneInfoRow data={{ name: 'Osmosis', value: '$16,150,297,401', pendingValue: '$74,546' }} />
      <ZoneInfoRow data={{ name: 'Injective', value: '$5,273,986,485', pendingValue: '$34,236' }} />
      <ZoneInfoRow data={{ name: 'Juno', value: '$2,920,284,678', pendingValue: '$14,465' }} />
    </>
  );
}

export { ZonesInfoTable };
