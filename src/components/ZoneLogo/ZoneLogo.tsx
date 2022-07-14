import cn from 'classnames';

import { SkeletonElementWrapper } from 'components';

import styles from './ZoneLogo.module.scss';
import { ZoneLogoProps } from './ZoneLogo.props';

export function ZoneLogo({
  logoUrl,
  name,
  size = '32px',
  className,
  loading = false,
  ...props
}: ZoneLogoProps) {
  const style = { width: size, height: size };
  const classes = cn(styles.container, className);
  return (
    <>
      {loading && <SkeletonElementWrapper className={classes} style={style} />}
      {!loading && (
        <div className={classes} style={style} {...props}>
          {logoUrl && (
            <img className={styles.logo} src={logoUrl} style={style} alt={`${name} logo`} />
          )}
        </div>
      )}
    </>
  );
}
