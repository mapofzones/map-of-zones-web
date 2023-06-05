import { DisclaimerIcon } from 'assets/icons';
import { ExternalLink, Tooltip } from 'components';

import styles from './IbcVolumeDisclaimer.module.scss';

function DisclaimerBody() {
  return (
    <>
      <span className={styles.title}>DISCLAIMER: </span>
      Data for Gravity Bridge IBC activity only includes standard transfers, not those facilitated
      by the Fast-Forwarding module. For complete information, visit{' '}
      <ExternalLink className={styles.link} href="https://info.gravitychain.io/">
        info.gravitychain.io
      </ExternalLink>
      .
    </>
  );
}

export function IbcVolumeDisclaimer({ className }: { className?: string }) {
  return (
    <Tooltip className={className} body={<DisclaimerBody />} showTriangle hideDelayMs={500}>
      <DisclaimerIcon className={styles.icon} />
    </Tooltip>
  );
}
