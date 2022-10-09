import { ReactNode } from 'react';

import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

export function Modal({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      portalClassName={styles.portal}
      overlayClassName={styles.overlay}
      className={styles.container}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={false}
    >
      {children}
    </ReactModal>
  );
}
