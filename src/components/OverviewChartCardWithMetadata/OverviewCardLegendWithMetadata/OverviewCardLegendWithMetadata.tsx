import cn from 'classnames';

import {
  AnalysisCardLegend,
  AnalysisLegendItem,
  AnalysisLegendTitle,
  LegendNumberValue,
} from 'components/AnalysisCard';
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
    <AnalysisCardLegend
      className={cn(styles.cardLegend, { [styles.wrapped]: wrappedInSmallScreen })}
    >
      {Object.keys(metadata).map((key: string) => {
        const conf = metadata[key];
        const value = values[key];

        return (
          <AnalysisLegendItem showBorder key={key} className={styles.legendItem}>
            <AnalysisLegendTitle
              title={conf.title}
              circleColor={conf.color}
              showPeriod={conf.showPeriod}
              tooltipText={conf.tooltipText}
            />
            <SkeletonTextWrapper loading={loading} defaultText={conf.defaultSkeletonText}>
              <LegendNumberValue size="lg" value={value} numberType={conf.numberType} />
            </SkeletonTextWrapper>
          </AnalysisLegendItem>
        );
      })}
    </AnalysisCardLegend>
  );
}
