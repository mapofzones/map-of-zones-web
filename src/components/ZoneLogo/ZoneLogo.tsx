import cn from 'classnames';

import styles from './ZoneLogo.module.scss';
import { ZoneLogoProps } from './ZoneLogo.props';

export function ZoneLogo({ logoUrl, name, size = '32px', className, ...props }: ZoneLogoProps) {
  const style = { width: size, height: size };
  return (
    <div className={cn(styles.container, className)} style={style} {...props}>
      {logoUrl && <img className={styles.logo} src={logoUrl} style={style} alt={`${name} logo`} />}
    </div>
  );
}
