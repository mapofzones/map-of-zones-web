import { Page } from '../Types';

export function getZoneNameFromHomePageQuery(page: Page) {
  return page?.pathname.split('/')[2];
}
