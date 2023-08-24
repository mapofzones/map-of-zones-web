import { ReactNode } from 'react';

import cn from 'classnames';
import { motion } from 'framer-motion';

import { useTabletMediumMediaQuery } from 'hooks/useMediaQuery';

import styles from './ZonesListModalContent.module.scss';

export function ZonesListModalContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const isTablet = useTabletMediumMediaQuery();
  const modalContainerVariants = isTablet
    ? {
        open: { opacity: 1 },
        collapsed: { opacity: 0 },
      }
    : {
        open: {
          scaleX: 1,
          height: '100%',
          opacity: 1,
          transition: {
            duration: 0.3,
            height: {
              duration: 0.3,
              delay: 0.3,
            },
          },
        },
        collapsed: { scaleX: 0, height: 0, opacity: 0 },
      };

  return (
    <motion.div
      className={cn(styles.modalContent, className)}
      initial="collapsed"
      animate="open"
      variants={modalContainerVariants}
    >
      {children}
    </motion.div>
  );
}
