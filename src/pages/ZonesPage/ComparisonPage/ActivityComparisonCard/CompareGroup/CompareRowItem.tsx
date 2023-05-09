import { NumberFormat, NumberType } from 'components';
import { PercentageBar } from 'components/ui/PercentageBar/PercentageBar';

export function CompareRowItem({
  zone,
  rate,
  value,
  color,
  numberType = NumberType.Number,
}: {
  zone: string;
  rate?: number;
  value?: number;
  color: string;
  numberType?: NumberType;
}) {
  return (
    <>
      <span>{zone}</span>
      <PercentageBar rate={rate} color={color} />
      <NumberFormat compact value={value} numberType={numberType} />
    </>
  );
}
