import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import Modal from 'components/Modal';

import { ReactComponent as CheckIcon } from 'assets/images/check.svg';
import { ReactComponent as CloseIcon } from 'assets/images/close-btn.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Zone({ item, onClick, isSelected }) {
  return (
    <div
      className={cx('zone', { selected: isSelected })}
      role="button"
      onClick={() => onClick(item)}
    >
      {item}
      {isSelected && <CheckIcon />}
    </div>
  );
}

function ZonesPicker({
  availableNodes,
  isOpen,
  onRequestClose,
  selectZones,
  targets,
}) {
  const [selectedItems, setSelectedItems] = useState(targets.split(',') || []);

  const data = useMemo(
    () =>
      availableNodes
        .filter(
          ({ zone_counerparty }, index, array) =>
            array.findIndex(
              item => item.zone_counerparty === zone_counerparty,
            ) === index,
        )
        .map(({ zone_counerparty }) => zone_counerparty),
    [availableNodes],
  );

  const onSelectZone = useCallback(
    item => {
      const newSelectedItems = [...selectedItems];

      const currentItemIndex = newSelectedItems.findIndex(
        selectedItem => selectedItem === item,
      );

      if (currentItemIndex === -1) {
        newSelectedItems.push(item);
      } else {
        newSelectedItems.splice(currentItemIndex, 1);
      }

      setSelectedItems(newSelectedItems);
    },
    [selectedItems],
  );

  const selectAll = useCallback(() => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data);
    }
  }, [data, selectedItems.length]);

  const onApply = useCallback(() => {
    selectZones(selectedItems);
    onRequestClose();
  }, [onRequestClose, selectZones, selectedItems]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedItems(targets.split(','));
    }
  }, [isOpen, targets]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentClassName={cx('container')}
      animations={{
        afterOpen: 'animate__slideInRight',
        beforeClose: 'animate__slideOutRight',
        overlayAfterOpen: 'overlayFadeIn',
        overlayBeforeClose: 'overlayFadeOut',
      }}
    >
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <div className={cx('titleContainer')}>
            <div className={cx('title')}>
              <FormattedMessage
                id="zones-filter-title"
                defaultMessage="Recipient zones"
              />
            </div>
            <button
              type="button"
              onClick={onRequestClose}
              className={cx('closeButton')}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <button type="button" className={cx('select-all')} onClick={selectAll}>
          <FormattedMessage
            id="select-all-button-title"
            defaultMessage="Select all"
          />
        </button>

        <div className={cx('content')}>
          {data.map(item => (
            <Zone
              item={item}
              key={item}
              isSelected={selectedItems.find(i => i === item)}
              onClick={onSelectZone}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className={cx('applyButton')}
        onClick={onApply}
        disabled={!selectedItems.length}
      >
        <FormattedMessage
          id="apply-button-title"
          defaultMessage={`Select ${
            selectedItems.length ? `(${selectedItems.length})` : ''
          }`}
        />
      </button>
    </Modal>
  );
}

ZonesPicker.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default ZonesPicker;
