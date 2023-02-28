import cn from 'classnames';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { NumberType, SkeletonRectangle } from 'components';
import { formatNumberToString } from 'components/ui/NumberFormat/NumberFormat';
import { Watermark } from 'components/Watermark';

import styles from './OverviewReturnedAddressesChart.module.scss';

import { OverviewReturnedAddressesChartProps } from '.';

export function OverviewReturnedAddressesChart({
  className,
  loading = false,
  returnedRate,
}: OverviewReturnedAddressesChartProps) {
  const chartData = [
    {
      period: 'Yesterday',
      valuePercent: 1,
      valuePercentTo100: 0,
    },
    {
      period: 'Today',
      valuePercent: returnedRate,
      valuePercentTo100: returnedRate ? 1 - returnedRate : undefined,
    },
  ];

  const gradientId = 'returned-addresses-graient';

  return (
    <>
      {loading && <SkeletonRectangle style={{ width: '100%', flex: '1 1 auto' }} />}
      {!loading && chartData && (
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
                type="monotone"
                dataKey="valuePercent"
                stackId="stackId"
                radius={[2, 2, 0, 0]}
                fillOpacity={0.5}
                fill={`url(#${gradientId})`}
              />
              <Bar
                type="monotone"
                dataKey="valuePercentTo100"
                stackId="stackId"
                radius={[2, 2, 0, 0]}
                fillOpacity={0.12}
                fill="#22AAFF"
              />

              <XAxis
                dataKey="period"
                style={{ fill: '#8F8F96' }}
                axisLine={false}
                tickLine={false}
                fontSize={12}
                interval={'preserveEnd'}
                padding={{ right: 0, left: 0 }}
              />

              <YAxis
                style={{ fill: '#8F8F96' }}
                tickLine={false}
                axisLine={false}
                fontSize={12}
                mirror={true}
                tickSize={0}
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
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
