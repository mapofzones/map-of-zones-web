import { DisclaimerIcon } from 'assets/icons';
import { Tooltip } from 'components';

import styles from './IbcVolumeDisclaimer.module.scss';

function DisclaimerBody() {
  return (
    <>
      <span className={styles.title}>DISCLAIMER: </span>
      Data for Gravity Bridge IBC activity only includes standard transfers, not those facilitated
      by the Fast-Forwarding module. For complete information, visit info.gravitychain.io.
    </>
  );
}

export function IbcVolumeDisclaimer({ className }: { className?: string }) {
  return (
    <Tooltip className={className} body={<DisclaimerBody />} showTriangle>
      <DisclaimerIcon className={styles.icon} />
    </Tooltip>
  );
}
