import cn from 'classnames';
import {
  Line,
  LineChart as LineChartRechart,
  ResponsiveContainer,
  ReferenceDot,
  YAxis,
} from 'recharts';

import { ChartItemByString } from 'utils/helper';

import styles from './LineChart.module.scss';
import { LineChartProps } from './LineChart.props';

export function LineChart({ data, dataKey, className }: LineChartProps) {
  const isChartColored = data.length > 1;

  const lastPointIndex = data.length - 1;
  const colorBreakPointPercentage = isChartColored ? (1 - 1 / lastPointIndex) * 100 : undefined;
  const isPositive =
    isChartColored && data[lastPointIndex][dataKey] != null
      ? data[lastPointIndex - 1][dataKey] < data[lastPointIndex][dataKey]
      : false;
  const isNegative =
    isChartColored && data[lastPointIndex][dataKey] != null
      ? data[lastPointIndex - 1][dataKey] > data[lastPointIndex][dataKey]
      : false;

  const referencePoint = getReferencePoint(data, dataKey);

  const gradientId = `gradient-${
    isPositive ? 'pos' : isNegative ? 'neg' : 'neutral'
  }-${colorBreakPointPercentage}`;

  return (
    <ResponsiveContainer className={className}>
      <LineChartRechart
        data={data}
        className={cn(styles.chart, {
          [styles.negative]: isNegative,
          [styles.positive]: isPositive,
        })}
      >
        {colorBreakPointPercentage && (
          <defs>
            <linearGradient
              id={gradientId}
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              className={cn(styles.gradient)}
            >
              <stop className={styles.stop1} offset="0%" />
              <stop className={styles.stop2} offset={`${colorBreakPointPercentage}%`} />
              <stop className={styles.stop3} offset={`${colorBreakPointPercentage}%`} />
              <stop className={styles.stop4} offset="100%" />
            </linearGradient>
          </defs>
        )}
        <Line stroke={`url(#${gradientId})`} dataKey={dataKey} dot={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          hide={true}
          domain={[(dataMin: number) => dataMin, (dataMax: number) => dataMax]}
        />
        {referencePoint && (
          <ReferenceDot
            x={lastPointIndex}
            y={referencePoint[dataKey]}
            r={2.5}
            className={styles.dot}
          />
        )}
      </LineChartRechart>
    </ResponsiveContainer>
  );
}

function getReferencePoint(data: ChartItemByString[], dataKey: string) {
  if (data.length < 2) {
    return undefined;
  }

  const referencePoint = data[data.length - 1];
  if (referencePoint && referencePoint[dataKey] === null) {
    const significantData = data.filter((point) => point[dataKey] != null);
    return significantData[significantData.length - 1];
  }
  return referencePoint;
}
