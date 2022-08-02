import { RefObject } from 'react';

export interface BurgerProps {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  className: string;
}
