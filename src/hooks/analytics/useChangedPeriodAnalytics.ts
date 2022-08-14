import { useEffect } from 'react';

import { Page } from './Types';
import { trackEvent } from './useAnalytics';

export function useChangedPeriodAnalytics(currentPage: Page, prevPage: Page) {
  useEffect(() => {
    if (!currentPage) return;

    if (
      currentPage.title === prevPage?.title &&
      currentPage.search.period !== prevPage?.search.period
    ) {
      trackEvent('changed period', {
        period: currentPage.search.period,
        source: currentPage.title,
      });
    }
  }, [currentPage, prevPage]);
}
