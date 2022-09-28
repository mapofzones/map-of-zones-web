import { useQuery } from '@apollo/client';

import { GithubLogo, TgLogo, TwitterLogo } from 'assets/icons';
import { Button, ExternalLink } from 'components';
import { ZoneNameDocument } from 'graphql/v2/common/Zone/__generated__/ZoneName.query.generated';
import { useShareLinksAnalytics } from 'hooks/analytics/multipage/useShareLinksAnalytics';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { useTelegramShareText, useTwitterShareText } from 'hooks/useShareLink';
import { useSelectedZone } from 'pages/HomePage/Map/hooks/eventHooks';
import { ElementSize } from 'types/ElementSize';
import { openInNewTab } from 'utils/helper';

import styles from './Footer.module.scss';

function Footer({ ...props }): JSX.Element {
  const trackShareLinkAnalytics = useShareLinksAnalytics();

  const [zone = ''] = useSelectedZone();
  const { data } = useQuery(ZoneNameDocument, {
    variables: { zone },
    skip: !zone,
  });
  const [selectedPeriod] = useSelectedPeriod(false);

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
        <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSczp-YbmECgX3_DsycgHVsZiJlQZLhB46jFfchQKPxiwFR4ig/viewform?usp=sf_link">
          Not listed?
        </ExternalLink>
      </div>
    </footer>
  );
}

export default Footer;
