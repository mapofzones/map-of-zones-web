import cn from 'classnames';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { NumberType, PeriodKeys, SkeletonRectangle } from 'components';
import { formatNumberToString } from 'components/ui/NumberFormat/NumberFormat';
import { Watermark } from 'components/Watermark';

import styles from './OverviewReturnedAddressesChart.module.scss';
import { OverviewReturnedAddressesChartTooltip } from './OverviewReturnedAddressesChartTooltip';
import { ZoneOverviewReturnedAddressesChartData } from './types';

import { OverviewReturnedAddressesChartProps } from '.';

export function OverviewReturnedAddressesChart({
  className,
  loading = false,
  data,
  period,
}: OverviewReturnedAddressesChartProps) {
  const gradientId = 'returned-addresses-graient';

  const chartData: ZoneOverviewReturnedAddressesChartData = [
    {
      period: getPeriodTitle(period, 0),
      value: data?.prevTotalAddresses,
      valuePercent: data?.prevTotalAddresses ? 1 : undefined,
    },
    {
      period: getPeriodTitle(period, 1),
      value: data?.returnedAddresses,
      valuePercent: data?.returnedRate,
    },
  ];

  const yAxisCountTicks = data
    ? [0, data?.returnedAddresses ?? 0, data?.prevTotalAddresses ?? 0]
    : [0];
  const yAxisPercentsTicks = data?.returnedRate ? [0, data.returnedRate, 1] : [0];

  return (
    <>
      {loading && <SkeletonRectangle style={{ width: '100%', flex: '1 1 auto' }} />}
      {!loading && data && (
        <div style={{ position: 'relative', flex: '1 1 auto' }}>
          <Watermark className={styles.chartLogo} />
          <ResponsiveContainer
            className={cn(className, styles.container)}
            width={'100%'}
            height={'100%'}
          >
            <BarChart
              className={styles.chart}
              data={chartData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  className={styles.gradient}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor="#22AAFF" stopOpacity={1} offset="0%" />
                  <stop stopColor="#22AAFF" stopOpacity={0.2} offset="100%" />
                </linearGradient>
              </defs>

              <Bar
                yAxisId="percents"
                type="monotone"
                dataKey="valuePercent"
                radius={[2, 2, 0, 0]}
                fillOpacity={0.5}
                fill={`url(#${gradientId})`}
              />

              <Line yAxisId="count" type="monotone" dataKey="value" strokeOpacity={0} />

              <XAxis
                dataKey="period"
                style={{ fill: '#8F8F96' }}
                axisLine={false}
                tickLine={false}
                fontSize={12}
                interval={'preserveEnd'}
                padding={{ right: 30, left: 40 }}
              />

              <YAxis
                yAxisId="count"
                orientation="right"
                style={{ fill: '#8F8F96' }}
                tickLine={false}
                axisLine={false}
                fontSize={12}
                mirror={true}
                tickSize={0}
                domain={[0, 1]}
                ticks={yAxisCountTicks}
                tickFormatter={(value: number) => formatNumberToString(value, NumberType.Number)}
              />

              <YAxis
                yAxisId="percents"
                orientation="left"
                style={{ fill: '#8F8F96' }}
                tickLine={false}
                axisLine={false}
                fontSize={12}
                mirror={true}
                tickSize={0}
                ticks={yAxisPercentsTicks}
                tickFormatter={(value: number) =>
                  formatNumberToString(value * 100, NumberType.Percent)
                }
              />

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ffffff"
                strokeOpacity="0.2"
              />

              <Tooltip
                active={true}
                wrapperStyle={{ outline: 'none', zIndex: 10000 }}
                cursor={{
                  stroke: '#7F7F8750',
                  strokeWidth: 1,
                  strokeOpacity: 0.5,
                  fillOpacity: 0.2,
                }}
                position={{ y: 0 }}
                allowEscapeViewBox={{ x: false, y: true }}
                content={<OverviewReturnedAddressesChartTooltip data={data} />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

function getPeriodTitle(period: PeriodKeys, index: number) {
  return index === 1 ? `Last ${period.toUpperCase()}` : `Previous ${period.toUpperCase()}`;
}
