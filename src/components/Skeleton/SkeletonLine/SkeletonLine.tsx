import { useMemo } from 'react';

import cn from 'classnames';

import { SkeletonElementWrapper } from 'components';

import styles from './SkeletonLine.module.scss';

function getTextwithSize(minLength: number, maxLength: number) {
  const diff = maxLength - minLength;
  const randomFloat = Math.random() * diff + minLength;
  const lettersCount = Math.round(randomFloat);
  return Array(lettersCount).fill('-').join();
}

export function SkeletonLine({
  loading,
  defaultValue,
  defaultValueMinLength = 3,
  defaultValueMaxLength = 10,
  children,
  className,
  ...props
}: any) {
  const defaultText = useMemo(
    () => defaultValue || getTextwithSize(defaultValueMinLength, defaultValueMaxLength),
    [defaultValue, defaultValueMinLength, defaultValueMaxLength]
  );

  return (
    <span className={cn(className, styles.container)} {...props}>
      {!loading && <>{children}</>}
      {loading && (
        <SkeletonElementWrapper>
          {<span style={{ opacity: 0 }}>{defaultText}</span>}
        </SkeletonElementWrapper>
      )}
    </span>
  );
}
