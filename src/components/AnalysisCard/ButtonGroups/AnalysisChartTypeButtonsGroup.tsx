import { AreaChartIcon, BarChartIcon } from 'assets/icons';
import { ChartType } from 'components/ChartContainer';
import { ElementSize } from 'types/ElementSize';
import { ButtonGroup } from 'ui';
import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

interface AnalysisChartTypeButtonsGroupProps {
  disabled?: boolean;
  chartTypes: ChartType[];
  onChartSelected?: (item: ButtonGroupItem<ChartType>) => void;
}

export function AnalysisChartTypeButtonsGroup({
  chartTypes,
  disabled = false,
  onChartSelected,
}: AnalysisChartTypeButtonsGroupProps) {
  return (
    <>
      {chartTypes.length > 1 && (
        <ButtonGroup
          disabled={disabled}
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

const CHART_ICONS = {
  [ChartType.AREA]: AreaChartIcon,
  [ChartType.BAR]: BarChartIcon,
};
