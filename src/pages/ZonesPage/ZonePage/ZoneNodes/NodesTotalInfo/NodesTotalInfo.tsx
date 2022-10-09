import cn from 'classnames';

import { ArrowRight } from 'assets/icons';
import { CountryFlag, NumberFormat, TotalCard, TotalInfo } from 'components';

import styles from './NodesTotalInfo.module.scss';
import { PercentValue } from './PercentValue/PercentValue';
import { CountryData, IspData } from './Types';
import { useNodesTotalInfo } from './useNodesTotalInfo';

export function NodesTotalInfo(): JSX.Element {
  const { countries, isp, indexedNodes, loading, notIndexedNodes } = useNodesTotalInfo();

  const renderIspItem = ({ name, percent, value }: IspData): JSX.Element => {
    return (
      <div className={styles.itemContainer}>
        <div className={styles.titleContainer}>{name}</div>
        <div className={styles.progressContainer}>
          <div className={styles.progressContent} style={{ width: `${percent}%` }} />
        </div>
        <NumberFormat className={styles.value} value={value} />
        <PercentValue value={percent} />
      </div>
    );
  };

  const renderCountry = ({ country, percent, value }: CountryData): JSX.Element => {
    return (
      <div className={styles.itemContainer}>
        <div className={styles.titleContainer}>
          <CountryFlag className={styles.country} country={country.code} />
          {country.name}
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
    <TotalInfo className={styles.container}>
      <TotalCard className={styles.card} loading={loading}>
        {isp.map(renderIspItem)}
        <div className={styles.showAllButton}>
          Show all ISP
          <ArrowRight className={styles.arrow} />
        </div>
      </TotalCard>

      <TotalCard className={styles.card} loading={loading}>
        {countries.map(renderCountry)}
        <div className={styles.showAllButton}>
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
            <div className={styles.progressContent} style={{ width: `${indexedNodes.percent}%` }} />
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
  );
}
