import { Page } from './Types';

export function getSimplePageSource(prevPage: Page, currentPage: Page) {
  if (!prevPage) {
    return 'direct link';
  } else if (prevPage.title !== currentPage.title) {
    return 'menu';
  }
  return '';
}
