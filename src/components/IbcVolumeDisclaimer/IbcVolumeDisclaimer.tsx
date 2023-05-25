import cn from 'classnames';

import { DisclaimerIcon } from 'assets/icons';
import { Tooltip } from 'components';

import styles from './IbcVolumeDisclaimer.module.scss';

const tooltipText = 'IBC volume disclaimer';

export function IbcVolumeDisclaimer({ className }: { className?: string }) {
  return (
    <Tooltip body={tooltipText}>
      <DisclaimerIcon className={cn(className, styles.disclaimer)} />
    </Tooltip>
  );
}
