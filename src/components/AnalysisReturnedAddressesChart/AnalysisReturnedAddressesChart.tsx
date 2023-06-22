import cn from 'classnames';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  LabelList,
} from 'recharts';

import { PeriodKeys } from 'components';
import { Watermark } from 'components/Watermark';
import { NumberType } from 'types/NumberType';
import { SkeletonRectangle } from 'ui';
import { formatNumberToString } from 'ui/NumberFormat/NumberFormat';

import styles from './AnalysisReturnedAddressesChart.module.scss';
import { AnalysisReturnedAddressesChartTooltip } from './AnalysisReturnedAddressesChartTooltip';
import { ZoneAnalysisReturnedAddressesChartData } from './types';

import { AnalysisReturnedAddressesChartProps } from '.';

export function AnalysisReturnedAddressesChart({
  className,
  loading = false,
  data,
  metadata,
  period,
}: AnalysisReturnedAddressesChartProps) {
  const gradientId = 'returned-addresses-gradient';
  const colors = metadata.map((value) => value.color).filter((value) => !!value) as string[];

  const chartData: ZoneAnalysisReturnedAddressesChartData = data?.map((item) => {
    return {
      prevPeriod: getPeriodTitle(period, 0),
      period: getPeriodTitle(period, 1),
      prevValue: item?.prevTotalAddresses,
      prevValuePercent: item?.prevTotalAddresses ? 1 : undefined,
      value: item?.returnedAddresses,
      valuePercent: item?.returnedRate,
    };
  });

  const yAxisCountTicks = data
    ? [0, data[0]?.returnedAddresses ?? 0, data[0]?.prevTotalAddresses ?? 0]
    : [0];

  const percentTicks = chartData
    .map((item) => item.valuePercent)
    .filter((item) => !!item) as number[];
  const yAxisPercentsTicks = percentTicks.length === 1 ? [0, ...percentTicks, 1] : [0, 1];

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
              margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
            >
              <defs>
                {colors.map((color: string, index: number) => {
                  return (
                    <linearGradient
                      id={`${gradientId}-${index}`}
                      key={`${gradientId}-${index}`}
                      className={styles.gradient}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop stopColor={color} stopOpacity={1} offset="0%" />
                      <stop stopColor={color} stopOpacity={0.2} offset="100%" />
                    </linearGradient>
                  );
                })}
              </defs>

              <Bar
                yAxisId="percents"
                type="monotone"
                dataKey="prevValuePercent"
                radius={[2, 2, 0, 0]}
                fillOpacity={0.5}
              >
                <LabelList
                  dataKey="prevPeriod"
                  position="insideBottom"
                  offset={-15}
                  fontSize={12}
                  fill="#8F8F96"
                />
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#${gradientId}-${index % colors.length})`}
                  />
                ))}
              </Bar>
              {/* it's impossible to extract dublicated code to custom bar component 
              ISSUE: https://github.com/recharts/recharts/issues/2788
              */}
              <Bar
                yAxisId="percents"
                type="monotone"
                dataKey="valuePercent"
                radius={[2, 2, 0, 0]}
                fillOpacity={0.5}
              >
                <LabelList
                  dataKey="valuePercent"
                  position="center"
                  fontSize={12}
                  fill="white"
                  formatter={(value: number) =>
                    formatNumberToString(value * 100, NumberType.Percent)
                  }
                />
                <LabelList
                  dataKey="period"
                  position="insideBottom"
                  offset={-15}
                  fontSize={12}
                  fill="#8F8F96"
                />
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#${gradientId}-${index % colors.length})`}
                  />
                ))}
              </Bar>

              {data.length <= 1 && (
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
              )}

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
                wrapperStyle={{ outline: 'none', zIndex: 10000 }}
                cursor={{
                  strokeWidth: 0,
                  fill: 'var(--grey-100)',
                  fillOpacity: 0.3,
                }}
                position={{ y: 0 }}
                filterNull={false}
                allowEscapeViewBox={{ x: false, y: true }}
                content={<AnalysisReturnedAddressesChartTooltip data={data} metadata={metadata} />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}

function getPeriodTitle(period: PeriodKeys, index: number) {
  return index === 1 ? `Last ${period.toUpperCase()}` : `Prev. ${period.toUpperCase()}`;
}
