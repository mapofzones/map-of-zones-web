import { useEffect } from 'react';

import { Page } from '../Types';
import { trackEvent } from '../useAnalytics';

export function useViewedApplicationPageAnalytics(
  currentPage: Page,
  prevPage: Page,
  history: Page[]
) {
  useEffect(() => {
    if (currentPage?.title && currentPage.title !== prevPage?.title) {
      trackEvent('viewed application page', {
        page_title: currentPage.title,
        referrer_url: prevPage?.title,
        visit_number: history.filter(({ pathname }) => pathname === currentPage.pathname).length,
        default_period: currentPage.search.period,
      });
    }
  }, [currentPage, prevPage, history]);
}
