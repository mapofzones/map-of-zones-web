import { ZoneInfoRowSkeleton } from './ZoneInfoRow/ZoneInfoRowSkeleton';

export function ZonesInfoTableSkeleton(): JSX.Element {
  return (
    <>
      {Array(7)
        .fill(0)
        .map((_, index: number) => (
          <ZoneInfoRowSkeleton key={index} />
        ))}
    </>
  );
}
