import { useEffect } from 'react';

import cn from 'classnames';

import { useAppSelector } from 'store/hooks';
import { Modal } from 'ui/Modal/Modal';
import { ModalProps } from 'ui/Modal/Modal.props';

import styles from './ZonesSelectorContainer.module.scss';

interface ZonesSelectorModalContainerProps extends ModalProps {}

export function ZonesSelectorModalContainer({
  children,
  className,
  ...props
}: ZonesSelectorModalContainerProps) {
  const isComparison = useAppSelector((state) => state.zonesPageComparisonMode.isComparison);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = 'var(--scrollbar-width)';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '';
    };
  }, []);

  return (
    <Modal
      className={cn(styles.container, { [styles.compareMode]: isComparison }, className)}
      {...props}
    >
      {children}
    </Modal>
  );
}
