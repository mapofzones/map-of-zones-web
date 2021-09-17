import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'react-modal';
import animate from 'animate.css';

import styles from './index.module.css';

const cx = classNames.bind({ ...animate, ...styles });

function AnimatedModal({
  animations,
  closeTimeoutMS,
  children,
  overlayClassName,
  contentClassName,
  backdropFilterBlur,
  ...props
}) {
  return (
    <Modal
      {...props}
      closeTimeoutMS={closeTimeoutMS}
      className={{
        base: cx('content', 'animate__animated', contentClassName),
        afterOpen: cx(animations.afterOpen),
        beforeClose: cx(animations.beforeClose),
      }}
      overlayClassName={{
        base: cx('overlay', 'animate__animated', overlayClassName),
        afterOpen: cx(animations.overlayAfterOpen),
        beforeClose: cx(animations.overlayBeforeClose),
      }}
      style={{
        overlay: {
          animationDuration: `${closeTimeoutMS}ms`,
          backdropFilter: `${backdropFilterBlur}`,
        },
        content: { animationDuration: `${closeTimeoutMS}ms` },
      }}
    >
      {children}
    </Modal>
  );
}

AnimatedModal.propTypes = {
  children: PropTypes.any,
  animations: PropTypes.object,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.any,
  contentClassName: PropTypes.any,
  backdropFilterBlur: PropTypes.any,
};

AnimatedModal.defaultProps = {
  animations: {
    afterOpen: 'animate__fadeInDownBig',
    beforeClose: 'animate__fadeOutUpBig',
    overlayAfterOpen: 'overlayFadeIn',
    overlayBeforeClose: 'overlayFadeOut',
  },
  closeTimeoutMS: 500,
};

export default AnimatedModal;
