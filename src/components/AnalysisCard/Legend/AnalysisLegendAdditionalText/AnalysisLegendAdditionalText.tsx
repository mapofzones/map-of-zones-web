import cn from 'classnames';
import moment from 'moment';

import { ANALYSIS_PERIODS_IN_HOURS_BY_KEY } from 'types/AnalysisCardPeriod';

import styles from './AnalysisLegendAdditionalText.module.scss';
import { AnalysisLegendAdditionalTextProps } from './AnalysisLegendAdditionalText.props';

export function AnalysisLegendAdditionalText({
  period,
  className,
}: AnalysisLegendAdditionalTextProps) {
  const endPeriodFormatted = moment().utc().format('DD MMM');
  const beginPeriodFormatted = moment()
    .utc()
    .subtract(ANALYSIS_PERIODS_IN_HOURS_BY_KEY[period] / 24, 'days')
    .format('DD MMM');

  return (
    <span className={cn(className, styles.additionalText)}>
      Aggregated value from {beginPeriodFormatted} to {endPeriodFormatted} (UTC)
    </span>
  );
}
