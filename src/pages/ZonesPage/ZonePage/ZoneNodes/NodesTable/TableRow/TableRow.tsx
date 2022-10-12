import { CrossIcon, TickIcon } from 'assets/icons';
import { ClipboardIcon, StatusCircle, TableRowItem } from 'components';
import { trimText } from 'utils/helper';

import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ index, node }: TableRowProps) {
  return (
    <tr className={styles.container}>
      <TableRowItem>
        <div className={styles.content}>{index + 1}</div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>{node.moniker}</div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>
          {trimText(node.id, 15)}
          <ClipboardIcon text={node.id} />
        </div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>{node.ip}</div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>{node.country}</div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>{node.isp}</div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>{node.dataCenter}</div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>
          <StatusCircle className={styles.statusCircle} />
          {node.lastSync}
        </div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>
          <span className={styles.subValue}>{trimText(node.apiType + ':', 28)}&nbsp;</span>
          {trimText(node.apiUrl, 26 - node.apiType.length)}
          <ClipboardIcon text={`${node.apiType}: ${node.apiUrl}`} />
        </div>
      </TableRowItem>

      <TableRowItem>
        <div className={styles.content}>
          {node.txIndexing ? (
            <TickIcon className={styles.tickIcon} />
          ) : (
            <CrossIcon className={styles.crossIcon} />
          )}
        </div>
      </TableRowItem>
    </tr>
  );
}
