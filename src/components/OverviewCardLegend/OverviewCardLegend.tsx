import cn from 'classnames';

import { ValueWithPending } from 'components';
import { OverviewChartLegend } from 'components/OverviewChartCard/Legend/OverviewChartLegend';
import { OverviewLegendItem } from 'components/OverviewChartCard/Legend/OverviewLegendItem';
import { OverviewLegendTitle } from 'components/OverviewChartCard/Legend/Title/OverviewLegendTitle';
import { LegendNumberValue } from 'components/OverviewChartCard/Legend/Value/LegendNumberValue';

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
      className={cn(styles.chartLegend, { [styles.wrapped]: wrappedInSmallScreen })}
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
            <LegendNumberValue value={value} numberType={conf.numberType} />
          </OverviewLegendItem>
        );
      })}
    </OverviewChartLegend>
  );

  return (
    <div className={cn(styles.cardLegend, { [styles.wrapped]: wrappedInSmallScreen })}>
      {Object.keys(metadata).map((key: string) => {
        const conf = metadata[key];
        const value = values[key];

        return (
          <ValueWithPending
            key={key}
            className={styles.detailsItem}
            title={conf.title}
            titleIcon={conf.icon}
            tooltipText={conf.tooltipText}
            value={value}
            valuePostfixComponent={conf.valuePostfixComponent}
            numberType={conf.numberType}
            size={conf.size}
            loading={loading}
            showPeriod={conf.showPeriod}
            defaultSkeletonText={conf.defaultSkeletonText}
            variants={conf.additional ? 'secondary' : 'primary'}
          />
        );
      })}
    </div>
  );
}
