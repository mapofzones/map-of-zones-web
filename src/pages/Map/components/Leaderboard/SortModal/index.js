import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';
import WheelPicker from '@maksim-tolo/react-wheel-picker';
import debounce from 'lodash.debounce';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function SortModal({
  isOpen,
  onRequestClose,
  data,
  selectedIndex,
  updateSelection,
}) {
  const onChange = useCallback(
    debounce(
      selected =>
        updateSelection(data.findIndex(({ id }) => id === selected.id)),
      500,
    ),
    [updateSelection, data],
  );

  if (!data) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={cx('overlay')}
      // className={cx('content')}
    >
      <div className={cx('selectedValueContainer')}>
        <div>
          <FormattedMessage
            id="sort-modal-selected-value-title"
            defaultMessage="Show indicator"
          />
        </div>
        <div className={cx('selectedValue')}>{data[selectedIndex].value}</div>
      </div>
      <WheelPicker
        data={data}
        onChange={onChange}
        height={150}
        itemHeight={32}
        selectedID={data[selectedIndex].id}
        color="#ccc"
        activeColor="#333"
        backgroundColor="#fff"
        shadowColor="#fff"
      />
    </Modal>
  );
}

SortModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  data: PropTypes.array,
  selectedIndex: PropTypes.number,
  updateSelection: PropTypes.func,
};

export default SortModal;
