import { HTMLMotionProps } from 'framer-motion';

export interface AnimatedArrowDownProps extends HTMLMotionProps<'div'> {
  initialReverted?: boolean;
  isReverted?: boolean;
}
