import { useEffect, useState } from 'react';

import { ScrollUpIcon } from 'icons';

import styles from './ScrollUpButton.module.scss';

const VISIBILITY_OFFSET = 400;

export function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

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
    return (
      <ScrollUpIcon
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className={styles.icon}
      />
    );
  }

  return null;
}
