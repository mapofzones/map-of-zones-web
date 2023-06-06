import { ExternalLink } from 'components';

import styles from './IbcVolumeDisclaimer.module.scss';

export function IbcVolumeDisclaimerBody() {
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
