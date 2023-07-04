import { useNavigate } from 'react-router-dom';

import { InfoDarkIcon, TrashIcon } from 'assets/icons';
import { getZonesComparisonPath } from 'routing';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant, Portal } from 'ui';

import styles from './ComparisonZonesFooter.module.scss';

export function ComparisonZonesFooter(): JSX.Element {
  const { isComparison, zones } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { resetZones } = useZonesPageComparisonModeActionsCreator();

  const onClearClick = () => {
    resetZones();
  };

  const navigate = useNavigate();
  const onCompareClick = () => {
    navigate(
      {
        pathname: `/${getZonesComparisonPath()}`,
        search: '?' + zones.map((zone) => `zones=${zone}`).join('&'),
      },
      {
        replace: true,
      }
    );
  };

  if (!isComparison) return <></>;

  return (
    <Portal>
      <div className={styles.container}>
        <div className={styles.content}>
          {(!zones || zones.length <= 1) && (
            <>
              <InfoDarkIcon className={styles.infoIcon} />

              <span className={styles.defaultTitle}>Select up to 3 zones</span>
            </>
          )}

          {zones?.length > 1 && (
            <Button
              className={styles.compareBtn}
              size={ButtonSize.LARGE}
              variant={ButtonVariant.PRIMARY}
              onClick={onCompareClick}
            >
              Compare {zones.length} Selected
            </Button>
          )}

          {zones?.length > 0 && (
            <Button
              className={styles.cancelBtn}
              size={ButtonSize.LARGE}
              variant={ButtonVariant.SECONDARY}
              IconBefore={TrashIcon}
              onClick={onClearClick}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
    </Portal>
  );
}
