import cn from 'classnames';

import { NumberFormat, NumberType } from 'components/ui';

import styles from './RatingDiffTriangle.module.scss';

export function RatingDiffTriangle({
  className,
  numberType = NumberType.Number,
  ratingDiff,
}: {
  className?: string;
  numberType?: NumberType;
  ratingDiff?: number;
}): JSX.Element {
  if (!ratingDiff) {
    return <></>;
  }

  return (
    <div className={cn(styles.ratingDiff, { [styles.negative]: ratingDiff < 0 }, className)}>
      <div
        className={cn(styles.triangle, {
          [styles.triangleUp]: ratingDiff > 0,
          [styles.triangleDown]: ratingDiff < 0,
        })}
      />
      <NumberFormat value={Math.abs(ratingDiff)} numberType={numberType} />
    </div>
  );
}
