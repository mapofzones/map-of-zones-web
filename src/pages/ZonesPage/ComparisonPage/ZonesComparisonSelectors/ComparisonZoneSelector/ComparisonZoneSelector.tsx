import { CloseCircleIcon } from 'assets/icons';
import { ZonesSelector } from 'components/ZonesSelector';

import styles from './ComparisonZoneSelector.module.scss';

import { ComparisonZoneSelectorProps } from '.';

export function ComparisonZoneSelector({
  zone,
  onZoneDelete,
  ...props
}: ComparisonZoneSelectorProps): JSX.Element {
  const deleteZone = () => {
    if (zone) {
      onZoneDelete?.(zone);
    }
  };

  return (
    <div className={styles.container}>
      <ZonesSelector zone={zone} className={styles.selector} {...props} />
      <CloseCircleIcon className={styles.deleteIcon} onClick={deleteZone} />
    </div>
  );
}
