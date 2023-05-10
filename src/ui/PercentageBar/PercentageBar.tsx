import styles from './PercentageBar.module.scss';

export function PercentageBar({ rate, color }: { rate?: number; color: string }) {
  const showBar = rate !== undefined && rate >= 0.01;

  return (
    <div className={styles.container}>
      {showBar && (
        <div
          className={styles.bar}
          style={{
            width: `${rate * 100}%`,
            backgroundColor: color,
            borderTopRightRadius: rate === 1 ? 4 : 0,
            borderBottomRightRadius: rate === 1 ? 4 : 0,
          }}
        />
      )}
    </div>
  );
}
