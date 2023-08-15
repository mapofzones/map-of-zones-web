import cn from 'classnames';

import { CompareButton } from 'components/CompareButton';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant } from 'ui';

import styles from './CompareModeSwitcher.module.scss';

export function CompareModeSwitcher({ className, text }: { className?: string; text?: string }) {
  const isComparison = useAppSelector((state) => state.zonesPageComparisonMode.isComparison);
  const { switchCompareMode, resetZones } = useZonesPageComparisonModeActionsCreator();

  return (
    <>
      {!isComparison && (
        <CompareButton className={className} onClick={() => switchCompareMode()} text={text} />
      )}
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
