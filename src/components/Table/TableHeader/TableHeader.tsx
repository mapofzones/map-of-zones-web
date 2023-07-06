import { useTableMetadata } from 'pages/ZonesPage/ZonesInfo/ZonesTable/ZonesTableMetadataProvider';

import { TableHeaderProps } from './TableHeader.props';
import { TableHeaderItem } from './TableHeaderItem/TableHeaderItem';

export function TableHeader<T extends string>({}: TableHeaderProps<T>) {
  const { headerMetadata, selectedColumnKey, setSelectedColumnKey } = useTableMetadata();

  return (
    <thead>
      <tr>
        {headerMetadata.map((header) => (
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
