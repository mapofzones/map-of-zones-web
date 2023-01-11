import moment from 'moment';

import { Circle } from 'components/ui/Circle';
import { NumberFormat } from 'components/ui/NumberFormat';

import styles from './ChartTooltipContent.module.scss';

export function ChartTooltipContent({ active, payload, label, datasetInfo, numberFormat }: any) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.container}>
        <span className={styles.time}>{moment.unix(label).format('DD MMM, HH:mm')}</span>
        {payload.map((data: any) => {
          return (
            <div key={data.dataKey} className={styles.tooltipItem}>
              <Circle color={data.color} />
              <span className={styles.description}>{datasetInfo[data.dataKey].description}</span>
              <NumberFormat
                value={data.payload[data.dataKey]}
                className={styles.value}
                numberType={numberFormat}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}
