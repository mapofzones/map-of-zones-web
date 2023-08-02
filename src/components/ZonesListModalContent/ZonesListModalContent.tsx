import React, { ReactNode } from 'react';

import cn from 'classnames';
import { motion } from 'framer-motion';

import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';

import styles from './ZonesListModalContent.module.scss';

export function ZonesListModalContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const isTablet = useTabletSmallMediaQuery();
  const modalContainerVariants = isTablet
    ? {
        open: { opacity: 1 },
        collapsed: { opacity: 0 },
      }
    : {
        open: { scaleX: '100%', opacity: 1 },
        collapsed: { scaleX: 0, opacity: 0 },
      };

  return (
    <motion.div
      className={cn(styles.modalContent, className)}
      initial="collapsed"
      animate="open"
      variants={modalContainerVariants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
