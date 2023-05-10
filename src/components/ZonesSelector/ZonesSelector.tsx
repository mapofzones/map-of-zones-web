import cn from 'classnames';

import { ZoneLogo } from 'components';
import { ZoneData } from 'hooks/queries/useZonesData';
import { useComponentVisible } from 'hooks/useComponentVisible';
import { AnimatedArrowDown } from 'ui';

import styles from './ZonesSelector.module.scss';
import { ZonesSelectorModal } from './ZonesSelectorModal/ZonesSelectorModal';

export function ZonesSelector({
  className,
  zone,
  loading,
  zonesList,
}: {
  className?: string;
  loading: boolean;
  zone?: ZoneData;
  zonesList: ZoneData[];
}) {
  const {
    ref,
    isVisible: isSearchVisible,
    setIsVisible: setSearchVisible,
  } = useComponentVisible<HTMLDivElement>(false);

  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  return (
    <>
      <div ref={ref} className={cn(className, styles.container)} onClick={toggleSearch}>
        <ZoneLogo
          logoUrl={zone?.logoUrl}
          name={zone?.name}
          size={'36px'}
          loading={loading}
          className={styles.zoneLogo}
        />
        <span className={styles.zoneName}>{zone?.name}</span>
        <AnimatedArrowDown className={styles.arrowContainer} isReverted={isSearchVisible} />
      </div>
      {isSearchVisible && <ZonesSelectorModal currentZone={zone} zonesList={zonesList} />}
    </>
  );
}
