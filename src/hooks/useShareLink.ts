import { matchPath, useLocation, useSearchParams } from 'react-router-dom';

import { PeriodKeys } from 'components';
import * as path from 'routing';

const pageTexts = [
  {
    path: path.assetsPath,
    text: 'assets list',
  },
  {
    path: path.zonesPath,
    text: 'inter-connection activity metrics',
  },
  {
    path: path.getZonesOverviewPath(),
    text: 'detailed set of metrics',
  },
  {
    path: path.getZonesPeersPath(),
    text: 'detailed set of peers with pertinent inter-connection activity stats',
  },
  {
    path: '*',
    text: 'inter-connection activity',
  },
];

function getTextByZone(zoneName?: string) {
  return !!zoneName ? `«${zoneName}» zone` : 'Cosmos Network';
}

function useAppLinkToShare(source: string) {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  searchParams.set('utm_source', source);

  return `${window.location.origin}${location.pathname}?${searchParams.toString()}`;
}

function usePageInfoText() {
  const location = useLocation();

  for (let index = 0; index < pageTexts.length; index++) {
    const pageElement = pageTexts[index];
    const result = matchPath(pageElement.path, location.pathname);
    if (result) {
      return pageElement.text;
    }
  }
  return '';
}

export function useTelegramShareText(selectedPeriod: PeriodKeys, activeZoneName?: string) {
  const shareLink = useAppLinkToShare('telegram.org');
  const text = useTextToShare(selectedPeriod, activeZoneName);

  return `https://t.me/share/url?url=${encodeURIComponent(shareLink)}&text=${encodeURIComponent(
    text
  )}`;
}

const twitterTags = '#CosmosNetwork #IBC #MapOfZones #IBCGang #DeFi #Cosmos #Blockchain';

export function useTwitterShareText(selectedPeriod: PeriodKeys, activeZoneName?: string) {
  const shareLink = useAppLinkToShare('twitter.com');
  const text = useTextToShare(selectedPeriod, activeZoneName, shareLink, twitterTags);

  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}

function useTextToShare(
  selectedPeriod: PeriodKeys,
  activeZoneName: string | undefined,
  shareLink?: string,
  tags?: string
) {
  const pageText = usePageInfoText();
  const selectedPeriodText = selectedPeriod ? ` for the last ${selectedPeriod}` : '';
  const shareLinkText = shareLink ? `${shareLink}\n` : '';

  const zoneName = getTextByZone(activeZoneName);
  let text = `Check out the ${zoneName} ${pageText}${selectedPeriodText}:\n${shareLinkText}by @mapofzones`;
  if (tags) {
    text += `\n${twitterTags}`;
  }
  return text;
}
