import styles from './TableHeader.module.scss';

export function TableHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>#</div>
      <div className={styles.title}>Name</div>
      <div className={styles.title}>IBC Volume</div>
      <div className={styles.title}>IBC Volume In</div>
      <div className={styles.title}>IBC Volume Out</div>
      <div className={styles.title}>Total TXS</div>
      <div className={styles.title}>IBC Transfers</div>
      <div className={styles.title}>Peers</div>
      <div className={styles.title}>Channels</div>
      <div className={styles.title}>DAU</div>
      <div className={styles.title}>IBC Transfers Activity</div>
    </div>
  );
}
