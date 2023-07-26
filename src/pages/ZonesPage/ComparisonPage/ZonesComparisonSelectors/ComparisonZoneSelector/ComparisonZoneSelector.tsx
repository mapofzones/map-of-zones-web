import { CloseCircleIcon } from 'assets/icons';
import { ZonesSelector } from 'components/ZonesSelector';

import styles from './ComparisonZoneSelector.module.scss';

import { ComparisonZoneSelectorProps } from '.';

export function ComparisonZoneSelector({
  zone,
  color,
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
      <div className={styles.border} style={{ borderColor: color }}></div>

      <ZonesSelector zone={zone} classNameButton={styles.selector} {...props} />

      <CloseCircleIcon className={styles.deleteIcon} onClick={deleteZone} />
    </div>
  );
}
