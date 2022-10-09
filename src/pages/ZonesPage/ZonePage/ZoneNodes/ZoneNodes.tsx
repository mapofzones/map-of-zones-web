import { NodesTable } from './NodesTable/NodesTable';
import { NodesTableHeader } from './NodesTableHeader/NodesTableHeader';
import { NodesTotalInfo } from './NodesTotalInfo/NodesTotalInfo';

export function ZoneNodes() {
  return (
    <div>
      <NodesTotalInfo />
      <NodesTableHeader />
      <NodesTable />
    </div>
  );
}
