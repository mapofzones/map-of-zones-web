import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

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
    <motion.div
      className={styles.container}
      initial={{ scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ outlineColor: color, outlineWidth: '2px', outlineOffset: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ZonesSelector zone={zone} logoSize={'28px'} classNameButton={styles.selector} {...props} />

      <IconWrapper className={styles.iconWrapper} onClick={deleteZone}>
        <CloseCircleIcon />
      </IconWrapper>
    </motion.div>
  );
}

interface IconWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export function IconWrapper({ className, children, ...props }: IconWrapperProps) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}
