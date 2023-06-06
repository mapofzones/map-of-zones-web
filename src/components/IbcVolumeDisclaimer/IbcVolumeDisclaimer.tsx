import cn from 'classnames';

import { DisclaimerIcon } from 'assets/icons';
import { Tooltip } from 'components';

import styles from './IbcVolumeDisclaimer.module.scss';
import { IbcVolumeDisclaimerBody } from './IbcVolumeDisclaimerBody';

export function IbcVolumeDisclaimer({ className }: { className?: string }) {
  return (
    <Tooltip
      className={cn(styles.container, className)}
      body={<IbcVolumeDisclaimerBody />}
      showTriangle
      hideDelayMs={500}
    >
      <DisclaimerIcon className={styles.icon} />
    </Tooltip>
  );
}
