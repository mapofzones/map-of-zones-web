import styles from './LegendTitleBase.module.scss';

interface LegendTitleBaseProps {
  children?: React.ReactNode;
}

export function LegendTitleBase({ children }: LegendTitleBaseProps) {
  return <span className={styles.title}>{children}</span>;
}
