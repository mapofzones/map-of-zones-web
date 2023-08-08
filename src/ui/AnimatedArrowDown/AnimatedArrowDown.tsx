import { motion } from 'framer-motion';

import { ArrowDown } from 'assets/icons';

import { AnimatedArrowDownProps } from './AnimatedArrowDown.props';

export function AnimatedArrowDown({
  initialReverted,
  isReverted,
  ...props
}: AnimatedArrowDownProps) {
  return (
    <motion.div
      variants={{
        isReverted: { rotate: '-180deg' },
        isNotReverted: { rotate: 0 },
      }}
      animate={isReverted ? 'isReverted' : 'isNotReverted'}
      initial={initialReverted ? 'isReverted' : 'isNotReverted'}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <ArrowDown />
    </motion.div>
  );
}
