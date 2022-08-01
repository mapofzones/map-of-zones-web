import cn from 'classnames';

import { NumberFormat, NumberType } from 'components/ui';

import styles from './RatingDiffTriangle.module.scss';

export function RatingDiffTriangle({
  allowEmpty = false,
  className,
  numberType = NumberType.Number,
  ratingDiff,
}: {
  allowEmpty?: boolean;
  className?: string;
  numberType?: NumberType;
  ratingDiff?: number | null;
}): JSX.Element {
  if (!allowEmpty && !ratingDiff) {
    return <></>;
  }

  return (
    <div
      className={cn(
        styles.ratingDiff,
        {
          [styles.negative]: (ratingDiff as number) < 0,
          [styles.positive]: (ratingDiff as number) > 0,
        },
        className
      )}
    >
      <div
        className={cn(styles.triangle, {
          [styles.up]: (ratingDiff as number) > 0,
          [styles.down]: (ratingDiff as number) < 0,
        })}
      />
      <NumberFormat value={Math.abs(ratingDiff as number)} numberType={numberType} />
    </div>
  );
}
