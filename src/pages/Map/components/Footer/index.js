import React from 'react';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as GitHubLogo } from 'assets/images/github-logo.svg';
import { ReactComponent as TgLogo } from 'assets/images/tg-logo.svg';
import { ReactComponent as TwitterLogo } from 'assets/images/twitter-logo.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('container')}>
      <div>
        <FormattedMessage
          id="developers-links"
          defaultMessage="Map of Zones by {bitquasarLink} & {ztakeLink}"
          values={{
            bitquasarLink: (
              <a
                href="https://bitquasar.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cx('link')}
              >
                Bitquasar.com
              </a>
            ),
            ztakeLink: (
              <a
                href="https://ztake.org"
                target="_blank"
                rel="noopener noreferrer"
                className={cx('link')}
              >
                Ztake.org
              </a>
            ),
          }}
        />
      </div>
      <div className={cx('socialContainer')}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={cx('link', 'socialLink')}
        >
          <GitHubLogo className={cx('socialIcon')} />
          <span className={cx('socialName')}>GitHub</span>
        </a>
        <a
          href="https://twitter.com/mapofzones"
          target="_blank"
          rel="noopener noreferrer"
          className={cx('link', 'socialLink')}
        >
          <TwitterLogo className={cx('socialIcon')} />
          <span className={cx('socialName')}>Twitter</span>
        </a>
        <a
          href="https://t.me/MapOfZones"
          target="_blank"
          rel="noopener noreferrer"
          className={cx('link', 'socialLink')}
        >
          <TgLogo className={cx('socialIcon')} />
          <span className={cx('socialName')}>Telegram</span>
        </a>
        <a
          href="mailto:hi@ztake.org"
          className={cx('link', 'socialLink', 'contactUsLink')}
        >
          <span className={cx('contactUsTitle')}>
            <FormattedMessage
              id="contact-us-title"
              defaultMessage="Contact us: "
            />
          </span>
          <span className={cx('socialName')}>support@mapofzones.com</span>
        </a>
      </div>
      <div className={cx('socialMediaTitle')}>
        <FormattedMessage
          id="social-media-title"
          defaultMessage="We on social media"
        />
      </div>
    </div>
  );
}

export default Footer;
