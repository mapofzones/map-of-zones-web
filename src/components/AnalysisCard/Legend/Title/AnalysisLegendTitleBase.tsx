import styles from './AnalysisLegendTitleBase.module.scss';

interface AnalysisLegendTitleBaseProps {
  children?: React.ReactNode;
}

export function AnalysisLegendTitleBase({ children }: AnalysisLegendTitleBaseProps) {
  return <span className={styles.title}>{children}</span>;
}
