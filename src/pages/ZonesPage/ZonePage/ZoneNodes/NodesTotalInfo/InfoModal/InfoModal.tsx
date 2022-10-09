import { CloseCircleIcon } from 'assets/icons';
import { Modal } from 'components';

import { InfoData } from '../Types';
import styles from './InfoModal.module.scss';
import { ModalItem } from './ModalItem/ModalItem';

export function InfoModal({
  entityForTitle,
  isOpen,
  items,
  onClose,
}: {
  entityForTitle: string;
  isOpen: boolean;
  items: Array<InfoData>;
  onClose: () => void;
}): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.header}>
        <div className={styles.title}>1029 Injective’s nodes</div>
        <div className={styles.subtitle}>
          Spreaded among {items.length} {entityForTitle}
        </div>

        <CloseCircleIcon className={styles.closeIcon} onClick={onClose} />
      </div>

      <div className={styles.list}>
        {items.map((item) => (
          <ModalItem key={`modal_item_${item.name}`} item={item} />
        ))}
      </div>
    </Modal>
  );
}
