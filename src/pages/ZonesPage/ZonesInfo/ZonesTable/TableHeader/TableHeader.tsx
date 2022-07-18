import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.props';
import { TableHeaderItem } from './TableHeaderItem/TableHeaderItem';
import { ColumnKeys } from './Types';

const CONFIG = [
  {
    title: '#',
  },
  {
    title: 'Name',
  },
  {
    title: 'IBC Volume',
    columnKey: ColumnKeys.IbcVolume,
    explanationText:
      'USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress',
  },
  {
    title: 'IBC Volume In',
    columnKey: ColumnKeys.IbcVolumeReceived,
    explanationText:
      'USD value of tokens successfully received from other Zones with pertinent volume in progress',
    circleType: 'source',
  },
  {
    title: 'IBC Volume Out',
    columnKey: ColumnKeys.IbcVolumeSent,
    explanationText:
      'USD value of tokens successfully transferred to other Zones with pertinent volume in progress',
    circleType: 'target',
  },
  {
    title: 'Total TXS',
    columnKey: ColumnKeys.TotalTxs,
    explanationText: 'All transactions in a specified zone',
    withBorder: true,
  },
  {
    title: 'IBC Transfers',
    columnKey: ColumnKeys.IbcTransfers,
    explanationText:
      'Number of successfully relayed IBC transfers with pertinent quantity in progress',
  },
  {
    title: 'Peers',
    explanationText:
      'Number of counterparties of a particular Zone with established IBC connectors',
    withBorder: true,
  },
  {
    title: 'Channels',
    explanationText: 'Number of channels that connect a particular Zone to its counterparties',
  },
  {
    title: 'DAU',
    columnKey: ColumnKeys.IbcActiveAddresses,
    explanationText: 'Number of Zone’s unique addresses initiated outward IBC transfer(s)',
    withBorder: true,
  },
  {
    title: 'IBC Transfers Activity',
    withBorder: true,
  },
];

export function TableHeader({ selectedColumnKey, setSelectedColumnKey }: TableHeaderProps) {
  return (
    <thead className={styles.container}>
      <tr>
        {CONFIG.map((header) => (
          <TableHeaderItem
            key={header.title}
            isSelected={selectedColumnKey === header.columnKey}
            setSelectedColumnKey={setSelectedColumnKey}
            {...header}
          />
        ))}
      </tr>
    </thead>
  );
}
