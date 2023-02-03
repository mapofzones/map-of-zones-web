import cn from 'classnames';

import { ValueWithPending } from 'components';

import styles from './OverviewCardLegend.module.scss';

import { OverviewCardLegendProps } from '.';

export function OverviewCardLegend({
  metadata,
  values,
  loading,
  wrappedInSmallScreen = false,
}: OverviewCardLegendProps) {
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
