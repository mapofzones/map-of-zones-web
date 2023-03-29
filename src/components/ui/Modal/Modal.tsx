import { ReactNode } from 'react';

import cn from 'classnames';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

ReactModal.setAppElement('*');

export function Modal({
  className,
  children,
  isOpen,
  onClose,
}: {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={cn(styles.container, className)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      {children}
    </ReactModal>
  );
}
