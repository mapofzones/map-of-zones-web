import { useMemo } from 'react';

import cn from 'classnames';
import {
  Bar,
  BarChart as BarRechart,
  Brush,
  CartesianGrid,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { NumberType } from 'components/ui/NumberFormat';
import { formatNumberToString } from 'components/ui/NumberFormat/NumberFormat';
import { formatUnixUTC } from 'utils/dateTimeUtils';

import styles from './BarChart.module.scss';
import { BarChartProps } from './BarChart.props';
import { useDatasetCalculations } from './useDatasetCalculations';
import { ChartTooltipContent } from '../ChartTooltipContent/ChartTooltipContent';

const BARS_LIMIT = 30;

export function BarChart({
  className,
  data,
  datasetInfo,
  dataFormat = NumberType.Number,
  timeFormat = 'DD MMM',
  tooltipTimeFormat = 'DD MMM, HH:mm',
  isZeroMinXAxisValue = true,
}: BarChartProps) {
  const datasetCalculatedInfo = useDatasetCalculations(datasetInfo, data);

  const chartHash = useMemo(() => Math.random(), []);
  const maskId = `mask-stripe-${chartHash}`;

  return (
    <>
      <ResponsiveContainer
        className={cn(className, styles.container)}
        width={'100%'}
        height={'100%'}
      >
        <BarRechart
          className={styles.chart}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barGap={1}
        >
          <defs>
            {Object.keys(datasetCalculatedInfo).map((key: string) => {
              const dataset = datasetCalculatedInfo[key];
              return (
                <linearGradient
                  id={dataset.gradientId}
                  key={dataset.gradientId}
                  className={cn(styles.gradient)}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor={dataset.color} stopOpacity={1} offset="0%" />
                  <stop stopColor={dataset.color} stopOpacity={0.2} offset="100%" />
                </linearGradient>
              );
            })}
          </defs>

          <pattern
            id="pattern-stripe"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="4" height="8" transform="translate(0,0)" fill="white"></rect>
          </pattern>
          <mask id={maskId}>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
          </mask>

          {Object.keys(datasetCalculatedInfo).map((key: string) => {
            const dataset = datasetCalculatedInfo[key];

            return (
              <Bar
                key={key}
                type="monotone"
                dataKey={key}
                radius={[2, 2, 0, 0]}
                fillOpacity={0.5}
                fill={`url(#${dataset.gradientId})`}
              />
            );
          })}

          <ReferenceArea
            fill={'#1c1c25'}
            shape={<DashedBar maskId={maskId} />}
            x1={data[data.length - 1]?.time}
          />

          <XAxis
            dataKey="time"
            style={{ fill: '#8F8F96' }}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            interval={'preserveEnd'}
            padding={{ right: 0, left: 0 }}
            tickFormatter={(value: number) => formatUnixUTC(value, timeFormat)}
          />
          <YAxis
            style={{ fill: '#8F8F96' }}
            tickLine={false}
            axisLine={false}
            fontSize={12}
            mirror={true}
            tickSize={3}
            domain={[
              isZeroMinXAxisValue ? 0 : (dataMin: number) => dataMin * 0.95,
              (dataMax: number) => dataMax * 1.05,
            ]}
            tickFormatter={(value: number) => formatNumberToString(value, dataFormat, true)}
          />

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#ffffff"
            strokeOpacity="0.2"
          />
          <Tooltip
            active={true}
            wrapperStyle={{ outline: 'none', zIndex: 1000 }}
            cursor={{
              strokeWidth: 0,
              fill: 'var(--grey-100)',
              fillOpacity: 0.3,
            }}
            position={{ y: 0 }}
            allowEscapeViewBox={{ x: false, y: true }}
            content={
              <ChartTooltipContent
                datasetInfo={datasetInfo}
                numberFormat={dataFormat}
                timeFormat={tooltipTimeFormat}
              />
            }
          />

          {false && data.length * Object.keys(datasetInfo).length > BARS_LIMIT && (
            <Brush
              startIndex={data.length > 10 ? data.length - 7 : 0}
              height={25}
              travellerWidth={7}
              stroke="#ffffff90"
              fill="#4f4f5a00"
              tickFormatter={(value: number) => formatUnixUTC(data[value]?.time, timeFormat)}
            />
          )}
        </BarRechart>
      </ResponsiveContainer>
    </>
  );
}

export const DashedBar = ({ x, y, width, height, fill, maskId }: any) => {
  const rectX = x;
  const rectY = height < 0 ? y + height : y;
  const rectHeight = Math.abs(height);

  return (
    <rect
      fill={fill}
      mask={`url(#${maskId})`}
      x={rectX}
      y={rectY}
      width={width}
      height={rectHeight}
    />
  );
};
