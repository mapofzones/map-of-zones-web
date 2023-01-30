import cn from 'classnames';
import moment from 'moment';
import {
  Bar,
  BarChart as BarRechart,
  Brush,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { NumberType } from 'components/ui/NumberFormat';
import { formatNumberToString } from 'components/ui/NumberFormat/NumberFormat';

import { ChartTooltipContent } from '../ChartTooltipContent/ChartTooltipContent';
import styles from './BarChart.module.scss';
import { BarChartProps } from './BarChart.props';
import { useDatasetCalculations } from './useDatasetCalculations';

const BARS_LIMIT = 30;

export function BarChart({
  className,
  data,
  datasetInfo,
  dataFormat = NumberType.Number,
  timeFormat = 'DD MMM, HH:mm',
  tooltipTimeFormat = 'DD MMM, HH:mm',
  isZeroMinXAxisValue = true,
}: BarChartProps) {
  const datasetCalculatedInfo = useDatasetCalculations(datasetInfo, data);
  return (
    <>
      <ResponsiveContainer
        className={cn(className, styles.container)}
        width={'99%'} // 99 instead of 100 to be able to automaticaly resize chart
        height={'100%'}
        maxHeight={250}
      >
        <BarRechart
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
                  <stop stopColor={dataset.color} stopOpacity={1} offset="0%" />
                  <stop stopColor={dataset.color} stopOpacity={0.2} offset="100%" />
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
              fill: '#7F7F8750',
              strokeWidth: 1,
              strokeOpacity: 0.5,
            }}
            position={{ y: 0 }}
            allowEscapeViewBox={{ x: true, y: true }}
            content={
              <ChartTooltipContent
                datasetInfo={datasetInfo}
                numberFormat={dataFormat}
                timeFormat={tooltipTimeFormat}
              />
            }
          />
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
          {data.length * Object.keys(datasetInfo).length > BARS_LIMIT && (
            <Brush
              startIndex={data.length > 10 ? data.length - 7 : 0}
              height={25}
              travellerWidth={7}
              stroke="#ffffff90"
              fill="#4f4f5a00"
              tickFormatter={(value: number) => moment.unix(data[value].time).format(timeFormat)}
            />
          )}
        </BarRechart>
      </ResponsiveContainer>
    </>
  );
}
