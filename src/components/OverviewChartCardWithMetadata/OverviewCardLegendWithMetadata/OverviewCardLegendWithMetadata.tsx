import cn from 'classnames';

import { OverviewChartLegend } from 'components/OverviewCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewCard/Legend/Title/OverviewLegendTitle';
import { LegendNumberValue } from 'components/OverviewCard/Legend/Value/LegendNumberValue';
import { SkeletonTextWrapper } from 'ui';

import styles from './OverviewCardLegendWithMetadata.module.scss';

import { OverviewCardLegendWithMetadataProps } from '.';

export function OverviewCardLegendWithMetadata({
  metadata,
  values,
  loading,
  wrappedInSmallScreen = false,
}: OverviewCardLegendWithMetadataProps) {
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
