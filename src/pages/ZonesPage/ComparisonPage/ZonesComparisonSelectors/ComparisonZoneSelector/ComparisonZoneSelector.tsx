import { motion } from 'framer-motion';

import { CloseCircleIcon } from 'assets/icons';
import { PointerAreaWrapper } from 'components/PointerAreaWrapper';
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
    <motion.div
      className={styles.container}
      initial={{ scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ boxShadow: `0 0 0 2px ${color}` }}
      transition={{ duration: 0.2 }}
    >
      <ZonesSelector zone={zone} logoSize={'28px'} classNameButton={styles.selector} {...props} />

      <PointerAreaWrapper
        className={styles.iconWrapper}
        onClick={deleteZone}
        areaScale={1.5}
        circle
      >
        <CloseCircleIcon />
      </PointerAreaWrapper>
    </motion.div>
  );
}
