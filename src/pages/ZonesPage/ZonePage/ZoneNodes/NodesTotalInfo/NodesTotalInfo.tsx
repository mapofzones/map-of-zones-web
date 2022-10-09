import { useState } from 'react';

import cn from 'classnames';

import { ArrowRight } from 'assets/icons';
import { CountryFlag, NumberFormat, TotalCard, TotalInfo } from 'components';

import { InfoModal } from './InfoModal/InfoModal';
import styles from './NodesTotalInfo.module.scss';
import { PercentValue } from './PercentValue/PercentValue';
import { useNodesTotalInfo } from './useNodesTotalInfo';

export function NodesTotalInfo(): JSX.Element {
  const [isCountriesModalOpened, setCountriesModalOpened] = useState(false);
  const [isIspModalOpened, setIspModalOpened] = useState(false);

  const { countries, isp, indexedNodes, loading, notIndexedNodes } = useNodesTotalInfo();

  const openCountriesModal = () => setCountriesModalOpened(true);

  const closeCountriesModal = () => setCountriesModalOpened(false);

  const openIspModal = () => setIspModalOpened(true);

  const closeIspModal = () => setIspModalOpened(false);

  const renderItem = ({
    code,
    name,
    percent,
    value,
  }: {
    code?: string;
    name: string;
    percent: number;
    value: number;
  }): JSX.Element => {
    return (
      <div className={styles.itemContainer}>
        <div className={styles.titleContainer}>
          {!!code && <CountryFlag className={styles.country} country={code} />}
          {name}
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressContent} style={{ width: `${percent}%` }} />
        </div>
        <NumberFormat className={styles.value} value={value} />
        <PercentValue value={percent} />
      </div>
    );
  };

  return (
    <>
      <TotalInfo className={styles.container}>
        <TotalCard className={styles.card} loading={loading}>
          {isp.slice(0, 3).map(renderItem)}
          <div className={styles.showAllButton} onClick={openIspModal}>
            Show all ISP
            <ArrowRight className={styles.arrow} />
          </div>
        </TotalCard>

        <TotalCard className={styles.card} loading={loading}>
          {countries.slice(0, 3).map(renderItem)}
          <div className={styles.showAllButton} onClick={openCountriesModal}>
            Show all countries
            <ArrowRight className={styles.arrow} />
          </div>
        </TotalCard>

        <TotalCard className={styles.card} loading={loading}>
          <div>
            <div className={styles.infoContainer}>
              <span>Indexed nodes</span>
              <span>Not indexed</span>
            </div>

            <div className={cn(styles.progressContainer, styles.wide)}>
              <div
                className={styles.progressContent}
                style={{ width: `${indexedNodes.percent}%` }}
              />
            </div>

            <div className={styles.infoContainer}>
              <div>
                <NumberFormat value={indexedNodes.value} />
                <PercentValue value={indexedNodes.percent} />
              </div>

              <div>
                <NumberFormat value={notIndexedNodes.value} />
                <PercentValue value={notIndexedNodes.percent} />
              </div>
            </div>
          </div>
        </TotalCard>
      </TotalInfo>

      <InfoModal
        entityForTitle="countries"
        items={countries}
        isOpen={isCountriesModalOpened}
        onClose={closeCountriesModal}
      />

      <InfoModal
        entityForTitle="ISPs"
        items={isp}
        isOpen={isIspModalOpened}
        onClose={closeIspModal}
      />
    </>
  );
}
