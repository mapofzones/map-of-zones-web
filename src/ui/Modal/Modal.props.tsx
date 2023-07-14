import { ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
}
