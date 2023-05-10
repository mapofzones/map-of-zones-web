import cn from 'classnames';

import { OverviewChartLegend } from 'components/OverviewChartCardWithMetadata/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCardWithMetadata/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCardWithMetadata/Legend/Title/OverviewLegendTitle';
import { LegendNumberValue } from 'components/OverviewChartCardWithMetadata/Legend/Value/LegendNumberValue';
import { SkeletonTextWrapper } from 'ui';

import styles from './OverviewCardLegend.module.scss';

import { OverviewCardLegendProps } from '.';

export function OverviewCardLegend({
  metadata,
  values,
  loading,
  wrappedInSmallScreen = false,
}: OverviewCardLegendProps) {
  return (
    <OverviewChartLegend
      className={cn(styles.cardLegend, { [styles.wrapped]: wrappedInSmallScreen })}
    >
      {Object.keys(metadata).map((key: string) => {
        const conf = metadata[key];
        const value = values[key];

        return (
          <OverviewLegendItem key={key} className={styles.legendItem}>
            <OverviewLegendTitle
              title={conf.title}
              circleColor={conf.color}
              showPeriod={conf.showPeriod}
              tooltipText={conf.tooltipText}
            />
            <SkeletonTextWrapper loading={loading} defaultText={conf.defaultSkeletonText}>
              <LegendNumberValue value={value} numberType={conf.numberType} />
            </SkeletonTextWrapper>
          </OverviewLegendItem>
        );
      })}
    </OverviewChartLegend>
  );
}
