interface LegendValueBaseProps {
  children?: React.ReactNode;
}

export function LegendValueBase({ children }: LegendValueBaseProps) {
  return <span>{children}</span>;
}
