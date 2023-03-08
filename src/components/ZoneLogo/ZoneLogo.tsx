import cn from 'classnames';

import { SkeletonCircle } from 'components';

import styles from './ZoneLogo.module.scss';
import { ZoneLogoProps } from './ZoneLogo.props';

export function ZoneLogo({
  logoUrl,
  name,
  size = '32px',
  className,
  loading = false,
  withOuterShadow = false,
  ...props
}: ZoneLogoProps) {
  const style = { width: size, height: size };
  const classes = cn(className, styles.container);

  return (
    <>
      {loading && <SkeletonCircle className={classes} size={size} />}
      {!loading && (
        <div className={classes} style={style} {...props}>
          {logoUrl && (
            <>
              <img src={logoUrl} style={style} />
              <div
                className={cn(styles.shadow, {
                  [styles.withOuterShadow]: withOuterShadow,
                })}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}
