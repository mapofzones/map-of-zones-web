import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import { InfoDarkIcon, InfoIcon } from 'assets/icons';
import { getZonesComparisonPath } from 'routing';
import { useActionCreators, useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant, Portal } from 'ui';

import styles from './ComparisonZonesFooter.module.scss';

import { ComparisonZonesFooterProps } from '.';

export function ComparisonZonesFooter({
  className,
  ...props
}: ComparisonZonesFooterProps): JSX.Element {
  const { isComparison, zones } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { resetZones, switchOffCompareMode } = useZonesPageComparisonModeActionsCreator();

  const onClearClick = () => {
    resetZones();
  };

  const navigate = useNavigate();
  const onCompareClick = () => {
    navigate(
      {
        pathname: '/zones/comparison',
        search: '?' + zones.map((zone) => `zones=${zone}`).join('&'),
      },
      {
        replace: true,
      }
    );
    switchOffCompareMode();
  };

  if (!isComparison) return <></>;

  return (
    <Portal>
      <div className={styles.container}>
        {(!zones || zones.length <= 1) && (
          <>
            <InfoDarkIcon className={styles.infoIcon} />

            <span className={styles.defaultTitle}>Select up to 3 zones</span>
          </>
        )}

        {zones?.length > 1 && (
          <Button size={ButtonSize.LARGE} variant={ButtonVariant.PRIMARY} onClick={onCompareClick}>
            Compare {zones.length} Selected
          </Button>
        )}

        {zones?.length > 0 && (
          <Button size={ButtonSize.LARGE} variant={ButtonVariant.SECONDARY} onClick={onClearClick}>
            Clear
          </Button>
        )}
      </div>
    </Portal>
  );
}
