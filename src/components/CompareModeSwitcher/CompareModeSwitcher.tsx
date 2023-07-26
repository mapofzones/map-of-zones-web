import cn from 'classnames';

import { CompareButton } from 'components/CompareButton';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant } from 'ui';

import styles from './CompareModeSwitcher.module.scss';

export function CompareModeSwitcher({ className }: { className?: string }) {
  const { isComparison } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { switchCompareMode, resetZones } = useZonesPageComparisonModeActionsCreator();

  return (
    <>
      {!isComparison && <CompareButton className={className} onClick={() => switchCompareMode()} />}
      {isComparison && (
        <Button
          className={cn(className, styles.cancelBtn)}
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
          onClick={() => {
            switchCompareMode();
            resetZones();
          }}
        >
          Cancel
        </Button>
      )}
    </>
  );
}