import { useEffect } from 'react';

import { Page, PAGE_TITLE } from './Types';
import { trackEvent } from './useAnalytics';

const EVENT_FOR_SCROLL_BY_PAGE_TITLE: Record<string, string> = {
  [PAGE_TITLE.Assets]: 'scrolled assets list',
  [PAGE_TITLE.ZonesList]: 'scrolled zones list',
};

export function usePageScrollAnalytics(currentPage: Page) {
  useEffect(() => {
    if (!currentPage) return;

    const eventName = EVENT_FOR_SCROLL_BY_PAGE_TITLE[currentPage.title];

    const scrollListener = () => {
      if (window.scrollY > 50) {
        window.removeEventListener('scroll', scrollListener);

        trackEvent(eventName);
      }
    };

    if (eventName) {
      window.addEventListener('scroll', scrollListener);
    }

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [currentPage]);
}
