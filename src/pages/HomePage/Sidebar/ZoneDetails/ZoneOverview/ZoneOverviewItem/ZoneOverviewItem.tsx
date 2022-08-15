import cn from 'classnames';

import { SkeletonTextWrapper } from 'components';
import { NumberFormat } from 'components/ui/NumberFormat/NumberFormat';
import { QuestionMark } from 'icons';

import styles from './ZoneOverviewItem.module.scss';
import { ZoneOverviewItemProps } from './ZoneOverviewItem.props';

function ZoneOverviewItem({
  title,
  period,
  value,
  loading,
  defaultLoadingValue,
  className,
  children,
  numberType,
  rowDirection = false,
  ...props
}: ZoneOverviewItemProps) {
  return (
    <div
      className={cn(styles.itemContainer, className, {
        [styles.rowDirection]: rowDirection,
      })}
      {...props}
    >
      <div className={styles.title}>
        {title}
        {period && <span> ({period})</span>}
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.value}>
        <SkeletonTextWrapper loading={loading} defaultText={defaultLoadingValue}>
          {children ? children : <NumberFormat value={value} numberType={numberType} />}
        </SkeletonTextWrapper>
      </div>
    </div>
  );
}

export { ZoneOverviewItem };
