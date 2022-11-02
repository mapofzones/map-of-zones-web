import React, { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { ArrowDown, ArrowUp } from 'assets/icons';

import { Modal } from '../Modal/Modal';
import styles from './DropdownWithModal.module.scss';
import { DropdownWithModalProps } from './DropdownWithModal.props';

export function DropdownWithModal({ className, renderChildren, title }: DropdownWithModalProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const { maxHeight, ...modalStyle } = style;
  const propsToChildren = { maxHeight };

  const toggleModal = () => setIsModalVisible((prevState) => !prevState);

  useEffect(() => {
    if (isModalVisible) {
      const style: React.CSSProperties = {};
      const hoverRect = dropdownRef.current?.getBoundingClientRect();

      if (!hoverRect) {
        return;
      }

      style.left = hoverRect.left;
      style.top = hoverRect.top + hoverRect.height + 10;
      style.maxHeight = Math.min(570, window.innerHeight - style.top - 12);
      style.width = Math.min(280, window.innerWidth - style.left - 12);

      setStyle(style);
    }
  }, [isModalVisible]);

  return (
    <>
      <div
        ref={dropdownRef}
        className={cn(styles.dropdown, { [styles.modalVisible]: isModalVisible }, className)}
        onClick={toggleModal}
      >
        {title}
        {isModalVisible ? (
          <ArrowUp className={styles.arrowIcon} />
        ) : (
          <ArrowDown className={styles.arrowIcon} />
        )}
      </div>

      <Modal
        style={modalStyle}
        className={styles.modal}
        isOpen={isModalVisible}
        onClose={toggleModal}
      >
        {renderChildren(propsToChildren)}
      </Modal>
    </>
  );
}
