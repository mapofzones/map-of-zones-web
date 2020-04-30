import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/images/logo.svg';

import Graph from '../Graph';
import ZonesFilter from '../ZonesFilter';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function GraphContainer({
  period,
  zonesStat,
  setPeriod,
  sortBy,
  isSortedDesc,
  zoneWeightAccessor,
  mapOpened,
  toggleMapOpen
}) {

  const [isTableOpened, setIsTableOpened] = useState(false);

  useEffect( () => {
    let map = document.documentElement.querySelector('canvas');
    window.addEventListener('scroll', ()=>handleScroll(map) );

    return window.removeEventListener('scroll', ()=>handleScroll(map) );
  }, []);


  const handleScroll = (map) => {
    if (map.getBoundingClientRect().top <= -450) {
      setIsTableOpened(true);
    } else {
      setIsTableOpened(false);
    }
  };

  const backToMap = () => {
    if (isTableOpened) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={cx('container', {cursorPointer:isTableOpened})} onClick={backToMap}>
      <Graph
        period={period.name}
        data={zonesStat}
        isBlurred={isTableOpened}
        zoneWeightAccessor={zoneWeightAccessor}
        mapOpened={mapOpened}
        toggleMapOpen={toggleMapOpen}
      />
      <Logo className={cx('logo')} />
      {!mapOpened && <ZonesFilter
        sortBy={sortBy}
        isSortedDesc={isSortedDesc}
        hours={period.hours}
        setPeriod={setPeriod}
        className={cx('filter')}
        isTableOpened={isTableOpened}
      />}
    </div>
  );
}

GraphContainer.propTypes = {
  period: PropTypes.shape({
    hours: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.node,
  }),
  zonesStat: PropTypes.shape({
    nodes: PropTypes.array, // TODO
    links: PropTypes.array, // TODO
  }),
  isTableOpened: PropTypes.bool,
  backToMap: PropTypes.func,
  setPeriod: PropTypes.func,
  sortBy: PropTypes.node,
  isSortedDesc: PropTypes.bool,
  zoneWeightAccessor: PropTypes.string,
};

export default GraphContainer;
