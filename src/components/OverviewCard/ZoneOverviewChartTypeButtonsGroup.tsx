import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartType } from 'components/ChartContainer';
import { ButtonGroup } from 'components/ui';
import { ElementSize } from 'types/ElementSize';

import styles from './OverviewCard.module.scss';

export const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};

export function ZoneOverviewChartTypeButtonsGroup({
  chartTypes,
  onChartSelected,
}: {
  chartTypes: ChartType[];
  onChartSelected?: any;
}) {
  return (
    <>
      {chartTypes.length > 1 && (
        <ButtonGroup
          className={styles.chartTypeSwitcher}
          size={ElementSize.SMALL}
          buttons={chartTypes.map((type: ChartType) => ({
            key: type,
            icon: CHART_ICONS[type],
          }))}
          setSelectedButton={onChartSelected}
        />
      )}
    </>
  );
}
