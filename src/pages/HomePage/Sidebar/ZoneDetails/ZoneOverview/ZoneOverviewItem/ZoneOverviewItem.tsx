import cn from 'classnames';

import { NumberFormat } from 'components/NumberFormat/NumberFormat';
import { QuestionMark } from 'icons';

import styles from './ZoneOverviewItem.module.scss';
import { ZoneOverviewItemProps } from './ZoneOverviewItem.props';

function ZoneOverviewItem({
  title,
  period,
  value,
  className,
  children,
  numberType,
  ...props
}: ZoneOverviewItemProps) {
  return (
    <div className={cn(styles.itemContainer, className)} {...props}>
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
