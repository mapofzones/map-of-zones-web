import { useMemo } from 'react';

import { SkeletonRectangle } from 'components';

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
  const defaultValue = defaultText || getTextwithSize(defaultTextMinLength, defaultTextMaxLength);

  return (
    <span className={className} {...props}>
      {!loading && <>{children}</>}
      {loading && (
        <SkeletonRectangle>{<span style={{ opacity: 0 }}>{defaultValue}</span>}</SkeletonRectangle>
      )}
    </span>
  );
}
