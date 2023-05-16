import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartType } from 'components/ChartContainer';
import { ElementSize } from 'types/ElementSize';
import { ButtonGroup } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

import styles from './OverviewCard.module.scss';

export const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};

export function ZoneOverviewChartTypeButtonsGroup({
  chartTypes,
  disabled = false,
  onChartSelected,
}: {
  disabled?: boolean;
  chartTypes: ChartType[];
  onChartSelected?: (item: ButtonGroupItem<ChartType>) => void;
}) {
  return (
    <>
      {chartTypes.length > 1 && (
        <ButtonGroup
          disabled={disabled}
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
