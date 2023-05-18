import { useState } from 'react';

import { ButtonGroupItem } from 'ui/ButtonGroup/ButtonGroup.props';

type ComparisonChartCardSelectedParametersReturn<PropertyType, PeriodType, ChartTypeType> = {
  selectedProperty: PropertyType;
  selectedPeriod: PeriodType;
  selectedChartType: ChartTypeType;
  onPropertyTabSelected: (item: ButtonGroupItem<PropertyType>) => void;
  onPeriodSelected: (key: PeriodType) => void;
  onChartTypeSelected: (item: ButtonGroupItem<ChartTypeType>) => void;
};

export function useComparisonChartCardSelectedParameters<PropertyType, PeriodType, ChartTypeType>(
  property: PropertyType,
  period: PeriodType,
  chartType: ChartTypeType
): ComparisonChartCardSelectedParametersReturn<PropertyType, PeriodType, ChartTypeType> {
  const [selectedProperty, setSelectedProperty] = useState<PropertyType>(property);

  function onPropertyTabSelected(item: { key?: PropertyType }): void {
    item?.key && setSelectedProperty(item.key);
  }

  const [selectedChartType, setSelectedChartType] = useState<ChartTypeType>(chartType);

  const onChartTypeSelected = (item: { key?: ChartTypeType }) => {
    item?.key && setSelectedChartType(item.key);
  };

  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>(period);

  const onPeriodSelected = (key: PeriodType) => {
    setSelectedPeriod(key);
  };

  return {
    selectedProperty,
    onPropertyTabSelected,
    selectedChartType,
    onChartTypeSelected,
    selectedPeriod,
    onPeriodSelected,
  };
}
