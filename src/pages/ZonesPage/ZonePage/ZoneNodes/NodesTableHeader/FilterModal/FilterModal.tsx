import { DropdownWithModal, Search } from 'components';

import styles from './FilterModal.module.scss';
import { ModalItem } from './ModalItem/ModalItem';

export function FilterModal({ items, title }: { items: Array<any>; title: string }) {
  return (
    <DropdownWithModal
      title={title}
      renderChildren={({ maxHeight }) => (
        <>
          <Search className={styles.modalSearch} autoFocus={true} />
          <div
            className={styles.modalContent}
            style={{
              maxHeight: maxHeight ? +maxHeight - 64 : 'initial', // 64 - search height
            }}
          >
            {items.map((item) => (
              <ModalItem key={`modal_item_${item.name}`} item={item} />
            ))}
          </div>
        </>
      )}
    />
  );
}
