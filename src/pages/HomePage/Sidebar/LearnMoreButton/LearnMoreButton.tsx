import { FC } from 'react';

import { ArrowRight } from 'assets/icons';
import { Button } from 'components';
import { ButtonType } from 'components/ui/Button/Button.props';
import { ElementSize } from 'types/ElementSize';

import styles from './LearnMoreButton.module.scss';
import { LearnMoreButtonProps } from './LearnMoreButton.props';

export const LearnMoreButton: FC<LearnMoreButtonProps> = (props: LearnMoreButtonProps) => {
  return (
    <Button
      className={styles.wrapper}
      size={ElementSize.LARGE}
      buttonType={ButtonType.PRIMARY}
      {...props}
    >
      <span className={styles.btnText}>Learn More</span>
      <ArrowRight className={styles.arrowRight} />
    </Button>
  );
};
