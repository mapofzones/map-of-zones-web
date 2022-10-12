import { ReactNode } from 'react';

import cn from 'classnames';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

export function Modal({
  className,
  children,
  isOpen,
  onClose,
  style,
}: {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}): JSX.Element {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={cn(styles.container, className)}
      style={{ content: style }}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={false}
    >
      {children}
    </ReactModal>
  );
}
