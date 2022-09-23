import { ReactElement, ReactNode } from 'react';

import cn from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useMediaQuery } from 'hooks/useMediaQuery';

import styles from './TotalInfo.module.scss';

export function TotalInfo({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element {
  const isTabletSmall = useMediaQuery('(max-width: 630px)');

  if (isTabletSmall) {
    const childrenToRender: ReactElement[] = (children && Array.isArray(children)
      ? children
      : [children]
    ).filter((c) => c) as unknown as ReactElement[];

    return (
      <Carousel
        className={cn(styles.container, className)}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {childrenToRender}
      </Carousel>
    );
  }

  return <div className={cn(styles.container, className)}>{children}</div>;
}
