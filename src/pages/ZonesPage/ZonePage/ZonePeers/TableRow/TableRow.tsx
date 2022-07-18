import cn from 'classnames';

import { NumberFormat, NumberType, ZoneStatus } from 'components';
import { ArrowDown, PendingIcon } from 'icons';

import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ parentZone, zone }: TableRowProps) {
  return (
    <tr className={styles.container}>
      <td className={styles.columnContainer}>
        <div className={styles.zoneBaseInfoContainer}>
          <ArrowDown className={styles.arrowIcon} />

          <div className={cn(styles.logoContainer, styles.logoContainerSmall)}>
            {parentZone?.logoUrl && (
              <>
                <img
                  className={cn(styles.logo, styles.logoSmall)}
                  src={parentZone.logoUrl}
                  alt={`${zone.zoneCounterpartyName} logo`}
                />
                <div className={styles.shadow} />
              </>
            )}
          </div>
          <div className={styles.logoContainer}>
            {zone.zoneCounterpartyLogoUrl && (
              <>
                <img
                  className={styles.logo}
                  src={zone.zoneCounterpartyLogoUrl}
                  alt={`${zone.zoneCounterpartyName} logo`}
                />
                <div className={cn(styles.shadow, styles.shadowSmall)} />
              </>
            )}
          </div>
          <div>
            <div className={styles.zoneCounterpartyNameContainer}>
              <span className={styles.value}>{zone.zoneCounterpartyName}</span>

              <ZoneStatus className={styles.status} status={zone.isZoneCounterpartyUpToDate} />
            </div>

            <span className={styles.channelsText}>
              {zone.channels.length} Channel{zone.channels.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeOut === null ? '-' : zone.ibcVolumeOut}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeOutPending === null ? '-' : zone.ibcVolumeOutPending}
            numberType={NumberType.Currency}
          />
        </span>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeOut === null ? '-' : zone.ibcVolumeOut}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeOutPending === null ? '-' : zone.ibcVolumeOutPending}
            numberType={NumberType.Currency}
          />
        </span>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcVolumeIn === null ? '-' : zone.ibcVolumeIn}
          numberType={NumberType.Currency}
        />

        <span className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={styles.pendingValue}
            value={zone.ibcVolumeInPending === null ? '-' : zone.ibcVolumeInPending}
            numberType={NumberType.Currency}
          />
        </span>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcTransfers === null ? '-' : zone.ibcTransfers}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
        <div className={styles.pendingValueContainer}>
          <PendingIcon className={styles.pendingIcon} />
          <NumberFormat
            className={cn(styles.value, styles.pendingValue, styles.pendingValueLarge)}
            value={zone.ibcTransfersPending === null ? '-' : zone.ibcTransfersPending}
            numberType={NumberType.Number}
          />
        </div>
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.ibcTransfersFailed === null ? '-' : zone.ibcTransfersFailed}
          numberType={NumberType.Number}
        />
      </td>

      <td className={styles.columnContainer}>
        <NumberFormat
          className={styles.value}
          value={zone.successRate === null ? '-' : zone.successRate}
          numberType={NumberType.Percent}
        />
      </td>
    </tr>
  );
}
