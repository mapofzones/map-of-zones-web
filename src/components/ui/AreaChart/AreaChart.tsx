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

import { NumberFormat, NumberType } from '../NumberFormat';
import { formatNumber } from '../NumberFormat/NumberFormat';
import styles from './AreaChart.module.scss';
import { AreaChartProps } from './AreaChart.props';

export function AreaChart({
  className,
  data,
  dataFormat = NumberType.Number,
  dataKey,
  timeFormat = 'DD MMM, HH:mm',
}: AreaChartProps) {
  const isChartColored = data.length > 1;

  const lastPointIndex = data.length - 1;
  const referencePoint = isChartColored ? data[lastPointIndex] : undefined;

  const isNegative = isChartColored ? data[0][dataKey] > data[lastPointIndex][dataKey] : false;
  const primaryColor = isNegative ? '#ff4455' : '#66DD55';

  const gradientId = `gradient-${isNegative ? 'neg' : 'pos'}`;

  return (
    <ResponsiveContainer
      className={cn(className, styles.container)}
      width={'99%'}
      height={'100%'}
      maxHeight={250}
    >
      <AreaRechart
        className={cn(styles.chart, {
          [styles.negative]: isNegative,
        })}
        data={data}
        margin={{ top: 0, right: 3, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient
            id={gradientId}
            className={cn(styles.gradient)}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop className={styles.stop1} offset="7.35%" />
            <stop className={styles.stop2} offset="96%" />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          interval={'preserveStartEnd'}
          tickFormatter={(value: number) => moment.unix(value).format(timeFormat)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={12}
          domain={[(dataMin: number) => dataMin * 0.95, (dataMax: number) => dataMax * 1.05]}
          tickFormatter={(value: number) => formatNumber(value, NumberType.Currency, true)}
        />
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#ffffff"
          strokeOpacity="0.2"
        />
        <Tooltip
          cursor={{ stroke: primaryColor, strokeWidth: 1, strokeOpacity: 0.5 }}
          wrapperClassName={styles.tooltipWrapper}
          position={{ y: -40 }}
          offset={0}
          separator={''}
          allowEscapeViewBox={{ x: true, y: true }}
          formatter={(value: number) => [
            <NumberFormat value={value} key={`Tooltip_chart`} numberType={dataFormat} />,
            '',
          ]}
          labelFormatter={(label: number) => moment.unix(label).format('DD MMM, HH:mm')}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={primaryColor}
          fillOpacity={1}
          fill={`url(#${gradientId})`}
          activeDot={{ r: 3, stroke: '#1E1C25', strokeWidth: 1 }}
        />
        {referencePoint && (
          <ReferenceDot
            x={referencePoint['time']}
            y={referencePoint[dataKey]}
            r={3}
            className={styles.dot}
          />
        )}
      </AreaRechart>
    </ResponsiveContainer>
  );
}
