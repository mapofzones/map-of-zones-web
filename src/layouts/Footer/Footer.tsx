import { Button, ExternalLink } from 'components';
import { GithubLogo, TgLogo, TwitterLogo } from 'icons';

import styles from './Footer.module.scss';

function Footer({ ...props }): JSX.Element {
  const shareClick = () => {
    console.log('share/tweet click');
  };

  return (
    <footer className={styles.container} {...props}>
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
        <ExternalLink href="https://bitquasar.com">Bitquasar.com</ExternalLink>
        {' & '}
        <ExternalLink href="https://ztake.org">Ztake.org</ExternalLink>
      </div>
      <div className={styles.emailLinkBlock}>
        <ExternalLink href="mailto:support@mapofzones.com">support@mapofzones.com</ExternalLink>
      </div>
      <div className={styles.socialsBlock}>
        <span>Our Socials:</span>
        <ExternalLink
          href="https://github.com/mapofzones"
          className={styles.socialLink}
          Icon={GithubLogo}
        />
        <ExternalLink href="https://t.me/MapOfZones" className={styles.socialLink} Icon={TgLogo} />
        <ExternalLink
          href="https://twitter.com/mapofzones"
          className={styles.socialLink}
          Icon={TwitterLogo}
        />
      </div>
      <div className={styles.notListedBlock}>
        <ExternalLink>Not listed?</ExternalLink>
      </div>
    </footer>
  );
}

export default Footer;
