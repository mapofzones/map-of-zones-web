import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import { trackEvent } from 'common/helper';

import { ReactComponent as GitHubLogo } from 'assets/images/github-logo.svg';
import { ReactComponent as TgLogo } from 'assets/images/tg-logo.svg';
import { ReactComponent as TwitterLogo } from 'assets/images/twitter-logo.svg';

import styles from './index.module.css';
import ContactForm from '../ContactForm';
import SuccessfulCircle from '../SuccessfulCircle';

const cx = classNames.bind(styles);

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSuccessCircle, setShowSuccessCircle] = useState(false);

  const handleCloseContactForm = () => setShowContactForm(false);
  const handleShowContactForm = () => setShowContactForm(true);
  const handleShowSuccessCircle = () => setShowSuccessCircle(true);
  const handleCloseSuccessCircle = () => setShowSuccessCircle(false);

  return (
    <>
      <ContactForm
        isOpen={showContactForm}
        onRequestClose={handleCloseContactForm}
        handleCloseCircle={handleCloseSuccessCircle}
        handleShowCircle={handleShowSuccessCircle}
      />
      <SuccessfulCircle isOpen={showSuccessCircle} />
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
                  onClick={() =>
                    trackEvent({
                      category: 'Footer',
                      action: 'bitquasar link click',
                    })
                  }
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
                  onClick={() =>
                    trackEvent({
                      category: 'Footer',
                      action: 'ztake link click',
                    })
                  }
                >
                  Ztake.org
                </a>
              ),
            }}
          />
        </div>
        <div className={cx('socialContainer')}>
          <div className={cx('socialWrapper')}>
            <a
              href="https://github.com/mapofzones"
              target="_blank"
              rel="noopener noreferrer"
              className={cx('link', 'socialLink')}
              onClick={() =>
                trackEvent({
                  category: 'Footer',
                  action: 'github link click',
                })
              }
            >
              <GitHubLogo className={cx('socialIcon')} />
              <span className={cx('socialName')}>GitHub</span>
            </a>
            <a
              href="https://twitter.com/mapofzones"
              target="_blank"
              rel="noopener noreferrer"
              className={cx('link', 'socialLink')}
              onClick={() =>
                trackEvent({
                  category: 'Footer',
                  action: 'twitter link click',
                })
              }
            >
              <TwitterLogo className={cx('socialIcon')} />
              <span className={cx('socialName')}>Twitter</span>
            </a>
            <a
              href="https://t.me/MapOfZones"
              target="_blank"
              rel="noopener noreferrer"
              className={cx('link', 'socialLink')}
              onClick={() =>
                trackEvent({
                  category: 'Footer',
                  action: 'telegram link click',
                })
              }
            >
              <TgLogo className={cx('socialIcon')} />
              <span className={cx('socialName')}>Telegram</span>
            </a>
          </div>
          <a
            href="mailto:hi@ztake.org"
            className={cx('link', 'socialLink', 'contactUsLink')}
            onClick={() =>
              trackEvent({
                category: 'Footer',
                action: 'take email click',
              })
            }
          >
            <span className={cx('contactUsTitle')}>
              <FormattedMessage
                id="contact-us-title"
                defaultMessage="Contact us: "
              />
            </span>
            <span className={cx('socialName')}>support@mapofzones.com</span>
          </a>
          <div
            className={cx('link', 'socialLink', 'notListed')}
            onClick={() => handleShowContactForm()}
          >
            <span>not listed?</span>
          </div>
        </div>
        <div className={cx('socialMediaTitle')}>
          <FormattedMessage
            id="social-media-title"
            defaultMessage="We on social media"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
