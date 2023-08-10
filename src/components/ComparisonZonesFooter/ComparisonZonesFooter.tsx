import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import { InfoDarkIcon, TrashIcon } from 'assets/icons';
import { getZonesComparisonPath, getZonesComparisonSearchPath } from 'routing';
import { useAppSelector } from 'store/hooks';
import { useZonesPageComparisonModeActionsCreator } from 'store/ZonesPageComparisonMode.slice';
import { Button, ButtonSize, ButtonVariant, Portal } from 'ui';

import styles from './ComparisonZonesFooter.module.scss';

export function ComparisonZonesFooter(): JSX.Element {
  const { isComparison, zones } = useAppSelector((state) => state.zonesPageComparisonMode);
  const { resetZones, resetState } = useZonesPageComparisonModeActionsCreator();

  const onClearClick = () => {
    resetZones();
  };

  const navigate = useNavigate();
  const onCompareClick = () => {
    navigate(
      {
        pathname: `/${getZonesComparisonPath()}`,
        search: getZonesComparisonSearchPath(zones),
      },
      {
        replace: true,
      }
    );
  };

  const location = useLocation();
  useEffect(() => {
    resetState();
  }, [location]);

  return (
    <AnimatePresence>
      {isComparison && (
        <Portal>
          <motion.div
            initial={{ translateY: '100%' }}
            animate={{ translateY: 0 }}
            exit={{ translateY: '100%' }}
            transition={{ duration: 0.5 }}
            className={styles.container}
          >
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
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
}
