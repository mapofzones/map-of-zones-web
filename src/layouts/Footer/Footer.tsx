import Button from '../../components/Button/Button';

import { GithubLogo, TgLogo, TwitterLogo } from '../../icons';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => {
  const shareClick = () => {
    console.log('share click');
  };

  return (
    <footer className={styles.footer} {...props}>
      <div className={styles.shareButtonsBlock}>
        <Button onClick={shareClick} className={styles.shareBtn} Icon={TgLogo}>
          Share
        </Button>
        <Button onClick={shareClick} className={styles.shareBtn} Icon={TwitterLogo}>
          Tweet
        </Button>
      </div>
      <div className={styles.externalLinksBlock}>
        {'© '}
        <a href="https://bitquasar.com" target="_blank" rel="noopener noreferrer">
          Bitquasar.com
        </a>
        {' & '}
        <a href="https://ztake.org" target="_blank" rel="noopener noreferrer">
          Ztake.org
        </a>
      </div>
      <div className={styles.emailLinkBlock}>
        <a href="mailto:hi@ztake.org">support@mapofzones.com</a>
      </div>
      <div className={styles.socialsBlock}>
        <span>Our Socials:</span>
        <a href="https://github.com/mapofzones" target="_blank" rel="noopener noreferrer">
          <GithubLogo className={styles.icon} />
        </a>
        <a href="https://t.me/MapOfZones" target="_blank" rel="noopener noreferrer">
          <TgLogo className={styles.icon} />
        </a>
        <a href="https://twitter.com/mapofzones" target="_blank" rel="noopener noreferrer">
          <TwitterLogo className={styles.icon} />
        </a>
      </div>
      <div className={styles.notListedBlock}>
        <a>Not listed?</a>
      </div>
    </footer>
  );
};

export default Footer;
