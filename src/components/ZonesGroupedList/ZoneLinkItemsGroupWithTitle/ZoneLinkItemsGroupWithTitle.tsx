import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './ZoneLinkItemsGroupWithTitle.module.scss';
import { itemAnimationProps } from '../ZoneLinkItemContainer';

import { ZoneLinkItemsGroupWithTitleProps } from '.';

export function ZoneLinkItemsGroupWithTitle({
  title,
  className,
  children,
}: ZoneLinkItemsGroupWithTitleProps) {
  return (
    <>
      {title && (
        <motion.div className={cn(styles.groupTitle, className)} {...itemAnimationProps}>
          {title}
        </motion.div>
      )}

      {children}
    </>
  );
}
