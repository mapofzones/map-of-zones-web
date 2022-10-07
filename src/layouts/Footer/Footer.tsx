import { useQuery } from '@apollo/client';

import { GithubLogo, TgLogo, TwitterLogo } from 'assets/icons';
import { Button, ExternalLink } from 'components';
import { ZoneNameDocument } from 'graphql/v2/common/Zone/__generated__/ZoneName.query.generated';
import { useShareLinksAnalytics } from 'hooks/analytics/Multipage/useShareLinksAnalytics';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useTelegramShareText, useTwitterShareText } from 'hooks/useShareLink';
import { useSelectedZone } from 'pages/HomePage/Map/hooks/eventHooks';
import { ElementSize } from 'types/ElementSize';
import { ExternalLinks } from 'types/external-links';
import { openInNewTab } from 'utils/helper';

import styles from './Footer.module.scss';

function Footer({ ...props }): JSX.Element {
  const trackShareLinkAnalytics = useShareLinksAnalytics();

  const [zone = ''] = useSelectedZone();
  const { data } = useQuery(ZoneNameDocument, {
    variables: { zone },
    skip: !zone,
  });
  const [selectedPeriod] = useSelectedPeriod();

  const twitterShareText = useTwitterShareText(selectedPeriod, data?.blockchain[0]?.name);
  const telegramShareLink = useTelegramShareText(selectedPeriod, data?.blockchain[0]?.name);

  const tgShareClick = () => {
    openInNewTab(telegramShareLink);
    trackShareLinkAnalytics('telegram');
  };

  const twitterShareClick = () => {
    openInNewTab(twitterShareText);
    trackShareLinkAnalytics('twitter');
  };

  return (
    <footer className={styles.container} {...props}>
      <div className={styles.shareButtonsBlock}>
        <Button
          onClick={tgShareClick}
          className={styles.shareBtn}
          IconBefore={TgLogo}
          size={ElementSize.SMALL}
        >
          Share
        </Button>
        <Button
          onClick={twitterShareClick}
          className={styles.shareBtn}
          IconBefore={TwitterLogo}
          size={ElementSize.SMALL}
        >
          Tweet
        </Button>
      </div>
      <div className={styles.externalLinksBlock}>
        {'© '}
        <ExternalLink href={ExternalLinks.bitquasar}>Bitquasar.com</ExternalLink>
        {' & '}
        <ExternalLink href={ExternalLinks.ztake}>Ztake.org</ExternalLink>
      </div>
      <div className={styles.emailLinkBlock}>
        <ExternalLink href={ExternalLinks.mozEmail}>support@mapofzones.com</ExternalLink>
      </div>
      <div className={styles.socialsBlock}>
        <span>Our Socials:</span>
        <ExternalLink
          href={ExternalLinks.mozGitHub}
          className={styles.socialLink}
          Icon={GithubLogo}
        />
        <ExternalLink href={ExternalLinks.mozTg} className={styles.socialLink} Icon={TgLogo} />
        <ExternalLink
          href={ExternalLinks.mozTwitter}
          className={styles.socialLink}
          Icon={TwitterLogo}
        />
      </div>
      <div className={styles.notListedBlock}>
        <ExternalLink href={ExternalLinks.listingForm}>Not listed?</ExternalLink>
      </div>
    </footer>
  );
}

export default Footer;
