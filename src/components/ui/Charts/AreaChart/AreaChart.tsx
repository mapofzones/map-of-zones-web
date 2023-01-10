import React from 'react';

import cn from 'classnames';
import moment from 'moment';
import {
  Area,
  AreaChart as AreaRechart,
  CartesianGrid,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { NumberType } from 'components/ui/NumberFormat';
import { formatNumberToString } from 'components/ui/NumberFormat/NumberFormat';

import styles from './AreaChart.module.scss';
import { AreaChartProps } from './AreaChart.props';
import { ChartTooltipContent } from './ChartTooltipContent';
import { useDatasetCalculations } from './useDatasetCalculations';

export function AreaChart({
  className,
  data,
  datasetInfo,
  dataFormat = NumberType.Number,
  timeFormat = 'DD MMM, HH:mm',
}: AreaChartProps) {
  const datasetCalculatedInfo = useDatasetCalculations(datasetInfo, data);

  return (
    <>
      <ResponsiveContainer
        className={cn(className, styles.container)}
        width={'100%'}
        height={'100%'}
        maxHeight={250}
      >
        <AreaRechart
          className={styles.chart}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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
                  <stop stopColor={dataset.color} stopOpacity={0.2} offset="7.35%" />
                  <stop stopColor={dataset.color} stopOpacity={0} offset="96%" />
                </linearGradient>
              );
            })}
          </defs>

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            interval={'preserveEnd'}
            padding={{ right: 3, left: 0 }}
            tickFormatter={(value: number) => moment.unix(value).format(timeFormat)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            fontSize={12}
            mirror={true}
            tickSize={3}
            domain={[(dataMin: number) => dataMin * 0.95, (dataMax: number) => dataMax * 1.05]}
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
            wrapperStyle={{ outline: 'none' }}
            cursor={{
              stroke:
                Object.keys(datasetCalculatedInfo).length === 1
                  ? Object.values(datasetCalculatedInfo)[0].color
                  : '#7F7F87',
              strokeWidth: 1,
              strokeOpacity: 0.5,
            }}
            position={{ y: 0 }}
            allowEscapeViewBox={{ x: true, y: true }}
            content={<ChartTooltipContent datasetInfo={datasetInfo} numberFormat={dataFormat} />}
          />
          {Object.keys(datasetCalculatedInfo).map((key: string) => {
            const dataset = datasetCalculatedInfo[key];

            return (
              <React.Fragment key={key}>
                <Area
                  type="monotone"
                  dataKey={key}
                  stroke={dataset.color}
                  fillOpacity={1}
                  fill={`url(#${dataset.gradientId})`}
                  activeDot={{ r: 3, stroke: '#1E1C25', strokeWidth: 1 }}
                />
                {dataset.referencePoint && (
                  <ReferenceDot
                    x={dataset.referencePoint['time']}
                    y={dataset.referencePoint[key]}
                    r={3}
                    fill={dataset.color}
                    stroke={'#1e1c25'}
                    strokeOpacity={1}
                  />
                )}
              </React.Fragment>
            );
          })}
        </AreaRechart>
      </ResponsiveContainer>
    </>
  );
}