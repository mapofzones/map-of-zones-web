import { useState } from 'react';

import cn from 'classnames';

import { PeriodKeys } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { OverviewPeriodButtonsGroup } from 'components/OverviewCard/OverviewPeriodButtonsGroup';

import styles from './ZoneOverviewActivityHeader.module.scss';

import { ZoneOverviewActivityHeaderProps } from '.';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function ZoneOverviewActivityHeader({
  children,
  selectedPeriod,
  onPeriodSelected,
  ...props
}: ZoneOverviewActivityHeaderProps): JSX.Element {
  return (
    <OverviewCard.Header {...props}>
      <OverviewCard.Title>{`Activity (${selectedPeriod.toUpperCase()})`}</OverviewCard.Title>

      {children}

      <OverviewPeriodButtonsGroup periods={PERIODS} onPeriodSelected={onPeriodSelected} />
    </OverviewCard.Header>
  );
}
