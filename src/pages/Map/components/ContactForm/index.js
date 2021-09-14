import React from 'react';
import Modal from 'components/Modal';
import classNames from 'classnames/bind';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function ContactForm({ isOpen, onRequestClose }) {
  const handleSubmit = json => {
    console.log(json);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentClassName={cx('content')}
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
              Let’s make your Star shining bright
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Website or GitHub
              <input name="webSite" />
            </label>
            <label>
              Zone RPC
              <input name="zoneRPC" />
            </label>
            <label>
              Your Contacts
              <input name="contacts" />
            </label>
            <label>
              Auxiliary info
              <input name="auxiliaryInfo" />
            </label>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ContactForm;
