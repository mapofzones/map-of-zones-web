import { FC } from 'react';

import { ArrowRight } from 'assets/icons';
import { Button } from 'components';
import { ButtonSize, ButtonVariant } from 'components/ui/Button/Button.props';

import styles from './LearnMoreButton.module.scss';
import { LearnMoreButtonProps } from './LearnMoreButton.props';

export const LearnMoreButton: FC<LearnMoreButtonProps> = (props: LearnMoreButtonProps) => {
  return (
    <Button
      className={styles.wrapper}
      size={ButtonSize.LARGE}
      variant={ButtonVariant.PRIMARY}
      {...props}
    >
      <span className={styles.btnText}>Learn More</span>
      <ArrowRight className={styles.arrowRight} />
    </Button>
  );
};
