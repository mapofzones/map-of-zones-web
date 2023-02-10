import moment from 'moment';

import { Circle } from 'components/ui/Circle';
import { NumberFormat } from 'components/ui/NumberFormat';

import styles from './ChartTooltipContent.module.scss';

export function ChartTooltipContent({
  active,
  payload = [],
  label,
  datasetInfo,
  numberFormat,
  timeFormat,
}: any) {
  if (active && payload && payload.length && datasetInfo) {
    return (
      <div className={styles.container}>
        <span className={styles.time}>{moment.unix(label).format(timeFormat)}</span>
        {Object.keys(datasetInfo).map((key: string) => {
          const dataset = datasetInfo[key];
          const data = payload.find((value: any) => value.name === key);

          return (
            data && (
              <div key={data.dataKey} className={styles.tooltipItem}>
                <Circle color={dataset.color} />
                <span className={styles.description}>{dataset.title}</span>
                <NumberFormat
                  value={data.payload[data.dataKey]}
                  className={styles.value}
                  numberType={numberFormat}
                />
              </div>
            )
          );
        })}
      </div>
    );
  }

  return null;
}
