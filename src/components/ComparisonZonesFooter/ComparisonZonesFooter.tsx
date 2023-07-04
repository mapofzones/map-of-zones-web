import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import { getZonesComparisonPath } from 'routing';
import { useActionCreators, useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant, Portal } from 'ui';

import styles from './ComparisonZonesFooter.module.scss';

import { ComparisonZonesFooterProps } from '.';

export function ComparisonZonesFooter({
  className,
  children,
  ...props
}: ComparisonZonesFooterProps): JSX.Element {
  const { isComparison, zones } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { resetZones } = useZonesPageComparisonModeActionsCreator();

  const onClearClick = () => {
    resetZones();
  };

  const navigate = useNavigate();
  const onCompareClick = () => {
    console.log(zones.map((zone) => `zones=${zone}`).join('&'));
    navigate(
      {
        pathname: '/zones/comparison',
        search: '?' + zones.map((zone) => `zones=${zone}`).join('&'),
      },
      {
        replace: true,
      }
    );
    // resetZones();
  };

  if (!isComparison) return <></>;

  return (
    <Portal>
      <div className={styles.container}>
        {!zones?.length && 'Select up to 3 zones'}
        {!!zones?.length && (
          <Button size={ButtonSize.LARGE} variant={ButtonVariant.PRIMARY} onClick={onCompareClick}>
            Compare {zones.length} Selected
          </Button>
        )}
        <Button size={ButtonSize.LARGE} variant={ButtonVariant.SECONDARY} onClick={onClearClick}>
          Clear
        </Button>
      </div>
    </Portal>
  );
}
