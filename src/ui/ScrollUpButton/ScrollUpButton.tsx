import { useEffect, useState } from 'react';

import { ScrollUpIcon } from 'assets/icons';

import styles from './ScrollUpButton.module.scss';

const VISIBILITY_OFFSET = 400;

export function ScrollUpButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > VISIBILITY_OFFSET) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isVisible) {
    return <ScrollUpIcon onClick={scrollToTop} className={styles.icon} />;
  }

  return <></>;
}
