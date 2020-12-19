import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';
import WheelPicker from '@maksim-tolo/react-wheel-picker';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function SortModal({
  isOpen,
  onRequestClose,
  data,
  selectedIndex,
  updateSelection,
}) {
  const [index, setIndex] = useState(selectedIndex);
  const onChange = useCallback(
    selected => setIndex(data.findIndex(({ id }) => id === selected.id)),
    [setIndex, data],
  );
  const applyChanges = useCallback(() => updateSelection(index), [
    updateSelection,
    index,
  ]);

  useEffect(() => setIndex(selectedIndex), [selectedIndex]);

  if (!data) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={cx('overlay')}
      className={cx('content')}
    >
      <div className={cx('container')}>
        <div className={cx('selectedValueContainer')}>
          <div>
            <FormattedMessage
              id="sort-modal-selected-value-title"
              defaultMessage="Show indicator"
            />
          </div>
          <div className={cx('selectedValue')}>{data[index].value}</div>
        </div>
        <WheelPicker
          data={data}
          onChange={onChange}
          height={150}
          itemHeight={32}
          selectedID={data[index].id}
          color="#ccc"
          activeColor="#333"
          backgroundColor="#fff"
          shadowColor="#fff"
        />
      </div>
      <button
        type="button"
        className={cx('applyButton')}
        onClick={applyChanges}
      >
        <FormattedMessage id="apply-button-title" defaultMessage="Apply" />
      </button>
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
