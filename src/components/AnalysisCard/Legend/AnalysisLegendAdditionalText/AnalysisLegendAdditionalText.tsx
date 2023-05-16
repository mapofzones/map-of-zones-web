import moment from 'moment';

import styles from './AnalysisLegendAdditionalText.module.scss';
import { AnalysisLegendAdditionalTextProps } from './AnalysisLegendAdditionalText.props';
import { OVERVIEW_PERIODS_IN_HOURS_BY_KEY } from '../../../OverviewChartCardWithMetadata';

export function AnalysisLegendAdditionalText({ period }: AnalysisLegendAdditionalTextProps) {
  const endPeriodFormatted = moment().utc().format('DD MMM');
  const beginPeriodFormatted = moment()
    .utc()
    .subtract(OVERVIEW_PERIODS_IN_HOURS_BY_KEY[period] / 24, 'days')
    .format('DD MMM');

  return (
    <span className={styles.additionalText}>
      Aggregated value from {beginPeriodFormatted} to {endPeriodFormatted} (UTC)
    </span>
  );
}
