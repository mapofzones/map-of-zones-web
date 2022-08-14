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

import styles from './AreaChart.module.scss';

export function AreaChart() {
  const data = [
    {
      time: 1660194000,
      price: 1.22,
    },
    {
      time: 1660197600,
      price: 1.25,
    },
    {
      time: 1660201200,
      price: 1.32,
    },
    {
      time: 1660204800,
      price: 1.12,
    },
    {
      time: 1660208400,
      price: 1.14,
    },
    {
      time: 1660212000,
      price: 1.18,
    },
    {
      time: 1660215600,
      price: 1.28,
    },
    {
      time: 1660219200,
      price: 1.37,
    },
  ];

  const isChartColored = data.length > 1;

  const lastPointIndex = data.length - 1;
  const referencePoint = isChartColored ? data[lastPointIndex] : undefined;
  const dataKey = 'price';
  const isNegative = true;

  return (
    <ResponsiveContainer
      className={styles.container}
      width={'100%'}
      height={'100%'}
      maxHeight={250}
    >
      <AreaRechart
        className={cn(styles.chart, {
          [styles.nagative]: isNegative,
        })}
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7.35%" stopColor="#6fd15b" stopOpacity={0.2} />
            <stop offset="96%" stopColor="#6fd15b" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value: number, index: number) =>
            moment.unix(value).format('DD MMM, HH:mm')
          }
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          hide={true}
          domain={[(dataMin: number) => dataMin * 0.95, (dataMax: number) => dataMax * 1.05]}
        />
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#ffffff"
          strokeOpacity="0.2"
        />
        <Tooltip
          cursor={{ stroke: '#66DD55', strokeWidth: 1, strokeOpacity: 0.5 }}
          position={{ y: -30 }}
          separator={''}
          offset={0}
          wrapperClassName={styles.tooltipWrapper}
          allowEscapeViewBox={{ x: true, y: true }}
          formatter={(value: number, name: any, props: any) => [value, '']}
          labelFormatter={(label: number, payload: any) =>
            moment.unix(label).format('DD MMM, HH:mm')
          }
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#66DD55"
          fillOpacity={1}
          fill="url(#colorUv)"
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
