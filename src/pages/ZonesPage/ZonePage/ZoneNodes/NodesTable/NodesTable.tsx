import { Table, TableSkeleton } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';

import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, TABLE_HEADER_CONFIG } from './Types';
import { useNodesTable } from './useNodesTable';

export function NodesTable() {
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.LastSync
  );

  const { data, loading: nodesLoading } = useNodesTable();

  return (
    <div>
      {!nodesLoading && (
        <Table
          headerConfig={TABLE_HEADER_CONFIG}
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={setSelectedColumnKey}
        >
          {data.map((node, index) => (
            <TableRow index={index} key={`node_${node.id}`} node={node} />
          ))}
        </Table>
      )}

      {nodesLoading && <TableSkeleton />}
    </div>
  );
}
