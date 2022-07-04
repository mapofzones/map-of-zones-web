import cn from 'classnames';

import { NumberFormat } from 'components/NumberFormat/NumberFormat';
import { QuestionMark } from 'icons';

import styles from './ZoneOverviewItem.module.scss';

function ZoneOverviewItem({ title, period, value, className, children, numberType }: any) {
  return (
    <div className={cn(styles.itemContainer, className)}>
      <div className={styles.title}>
        {title}
        {period && <span> ({period})</span>}
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.value}>
        {children ? children : <NumberFormat value={value} numberType={numberType} />}
      </div>
    </div>
  );
}

export { ZoneOverviewItem };
