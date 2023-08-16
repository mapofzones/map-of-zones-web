import cn from 'classnames';
import { Variants, motion } from 'framer-motion';

import { useScrollIfItemIsActive } from 'hooks/useScrollIfItemIsActive';

import styles from './ZoneLinkItemContainer.module.scss';

import { ZoneLinkItemContainerProps } from '.';

const itemAnimationVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24, duration: 1 },
  },
  hidden: { opacity: 0, y: -100, transition: { duration: 0.6 } },
};

export const itemAnimationProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: itemAnimationVariants,
};

export function ZoneLinkItemContainer({
  className,
  children,
  zoneKey,
  isActive,
  onItemClick,
}: ZoneLinkItemContainerProps): JSX.Element {
  const activeItemRef = useScrollIfItemIsActive<HTMLDivElement>(isActive);

  return (
    <motion.div
      ref={activeItemRef}
      className={cn(
        styles.zone,
        {
          [styles.activeZone]: isActive,
        },
        className
      )}
      onClick={() => onItemClick?.(zoneKey)}
      layout
      {...itemAnimationProps}
    >
      {children}
    </motion.div>
  );
}
