import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SkeletonElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface SkeletonRectangleProps extends SkeletonElementProps {}

export interface SkeletonCircleProps extends SkeletonElementProps {
  size?: string;
}
