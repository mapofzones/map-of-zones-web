import { Button, Link } from '../../components';

import { GithubLogo, TgLogo, TwitterLogo } from '../../icons';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => {
  const shareClick = () => {
    console.log('share/tweet click');
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
        <Link href="https://bitquasar.com" target="_blank" rel="noopener noreferrer">
          Bitquasar.com
        </Link>
        {' & '}
        <Link href="https://ztake.org" target="_blank" rel="noopener noreferrer">
          Ztake.org
        </Link>
      </div>
      <div className={styles.emailLinkBlock}>
        <Link href="mailto:support@mapofzones.com">support@mapofzones.com</Link>
      </div>
      <div className={styles.socialsBlock}>
        <span>Our Socials:</span>
        <Link
          href="https://github.com/mapofzones"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          Icon={GithubLogo}
        />
        <Link
          href="https://t.me/MapOfZones"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          Icon={TgLogo}
        />
        <Link
          href="https://twitter.com/mapofzones"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          Icon={TwitterLogo}
        />
      </div>
      <div className={styles.notListedBlock}>
        <Link>Not listed?</Link>
      </div>
    </footer>
  );
};

export default Footer;
