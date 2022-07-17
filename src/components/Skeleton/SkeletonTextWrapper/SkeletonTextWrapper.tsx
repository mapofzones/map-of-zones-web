import { useMemo } from 'react';

import cn from 'classnames';

import { SkeletonRectangle } from 'components';

import styles from './SkeletonTextWrapper.module.scss';
import { SkeletonTextWrapperProps } from './SkeletonTextWrapper.props';

function getTextwithSize(minLength: number, maxLength: number) {
  const diff = maxLength - minLength;
  const randomFloat = Math.random() * diff + minLength;
  const lettersCount = Math.round(randomFloat);
  return Array(lettersCount).fill('-').join('');
}

export function SkeletonTextWrapper({
  loading,
  defaultText,
  defaultTextMinLength = 10,
  defaultTextMaxLength = 15,
  children,
  className,
  ...props
}: SkeletonTextWrapperProps) {
  const defaultValue = useMemo(
    () => defaultText || getTextwithSize(defaultTextMinLength, defaultTextMaxLength),
    [defaultText, defaultTextMinLength, defaultTextMaxLength]
  );

  return (
    <span className={cn(className, styles.container)} {...props}>
      {!loading && <>{children}</>}
      {loading && (
        <SkeletonRectangle>{<span style={{ opacity: 0 }}>{defaultValue}</span>}</SkeletonRectangle>
      )}
    </span>
  );
}
