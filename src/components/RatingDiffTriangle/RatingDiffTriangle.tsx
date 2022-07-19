import cn from 'classnames';

import styles from './RatingDiffTriangle.module.scss';

export function RatingDiffTriangle({
  className,
  ratingDiff,
}: {
  className?: string;
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
      {Math.abs(ratingDiff)}
    </div>
  );
}
