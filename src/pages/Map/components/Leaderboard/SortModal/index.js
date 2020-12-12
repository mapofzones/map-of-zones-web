import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';
import WheelPicker from 'react-wheelpicker';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function SortModal({
  isOpen,
  onRequestClose,
  data,
  selectedIndex,
  updateSelection,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={cx('overlay')}
      className={cx('content')}
    >
      <div className={cx('selectedValueContainer')}>
        <div>
          <FormattedMessage
            id="sort-modal-selected-value-title"
            defaultMessage="Show indicator"
          />
        </div>
        <div className={cx('selectedValue')}>{data[selectedIndex]}</div>
      </div>
      <WheelPicker
        animation="flat"
        data={data}
        height={40}
        parentHeight={250}
        fontSize={13}
        defaultSelection={selectedIndex}
        updateSelection={updateSelection}
        scrollerId="sort-modal-scroll-select"
      />
    </Modal>
  );
}

SortModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string),
  selectedIndex: PropTypes.number,
  updateSelection: PropTypes.func,
};

export default SortModal;
