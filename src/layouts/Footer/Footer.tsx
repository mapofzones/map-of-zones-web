import Button from '../../components/Button/Button';

import { GithubLogo, TgLogo, TwitterLogo } from '../../icons';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => {
  const shareClick = () => {
    console.log('share click');
  };

  console.log(GithubLogo);

  return (
    <footer className={styles.footer} {...props}>
      <div className={styles.shareButtons}>
        <Button onClick={shareClick} icon={<TgLogo />}>
          Share
        </Button>
        <Button onClick={shareClick}>
          <TwitterLogo className={styles.icon} />
          Tweet
        </Button>
      </div>
      <span>
        ©
        <a
          href="https://bitquasar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitquasar.com
        </a>
        &
        <a href="https://ztake.org" target="_blank" rel="noopener noreferrer">
          Ztake.org
        </a>
      </span>
      <a href="mailto:hi@ztake.org">support@mapofzones.com</a>
      <div className={styles.socials}>
        Our Socials:
        <GithubLogo className={styles.icon} />
        <TgLogo className={styles.icon} />
        <TwitterLogo className={styles.icon} />
      </div>
      <span>Not listed?</span>
    </footer>
  );
};

export default Footer;
