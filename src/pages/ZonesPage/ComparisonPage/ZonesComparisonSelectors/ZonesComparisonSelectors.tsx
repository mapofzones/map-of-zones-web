import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';

import { ZonesSelector } from 'components/ZonesSelector';
import { useZonesData } from 'hooks/queries/useZonesData';

import styles from './ZonesComparisonSelectors.module.scss';

import { ZonesComparisonSelectorsProps } from '.';

export function ZonesComparisonSelectors({
  className,
  children,
  ...props
}: ZonesComparisonSelectorsProps): JSX.Element {
  const [search] = useSearchParams();
  const zones = search.getAll('zones');

  const { data: zonesList, loading } = useZonesData();

  return (
    <div className={cn(className, styles.container)} {...props}>
      <ZonesSelector zone={undefined} zonesList={zonesList} loading={loading} />
    </div>
  );
}
