import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoBeta } from 'assets/images/logo-beta.svg';

import { Graph3D, Graph2D } from '../Graph';
import ZonesSorter from '../ZonesSorter';

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
  toggleMapOpen,
  setFocusedZone,
  focusedZone,
  isTableOpened,
  setFilter,
  currentFilter,
}) {
  const backToMap = () => {
    if (isTableOpened) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const [graphType, toggleGraphType] = useState('2D');

  const Graph = graphType === '2D' ? Graph2D : Graph3D;

  return (
    <div
      className={cx('container', { cursorPointer: isTableOpened })}
      onClick={backToMap}
    >
      <Graph
        period={period}
        data={zonesStat}
        isBlurred={isTableOpened}
        zoneWeightAccessor={zoneWeightAccessor}
        mapOpened={mapOpened}
        toggleMapOpen={toggleMapOpen}
        onNodeFocus={setFocusedZone}
        focusedNode={focusedZone}
        currentFilter={currentFilter}
        setFilter={setFilter}
        toggleGraphType={toggleGraphType}
      />

      <Logo className={cx('logo')} />
      <LogoBeta className={cx('logo-beta')} />

      {!mapOpened && (
        <ZonesSorter
          sortBy={sortBy}
          isSortedDesc={isSortedDesc}
          hours={period.hours}
          setPeriod={setPeriod}
          className={cx('filter')}
          isTableOpened={isTableOpened}
          focusedZoneName={focusedZone?.name}
        />
      )}
    </div>
  );
}

GraphContainer.propTypes = {
  period: PropTypes.shape({
    hours: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.node,
    rawText: PropTypes.string,
  }),
  zonesStat: PropTypes.shape({
    nodes: PropTypes.array, // TODO
    links: PropTypes.array, // TODO
    graph: PropTypes.object,
  }),
  isTableOpened: PropTypes.string,
  handleScroll: PropTypes.func,
  backToMap: PropTypes.func,
  setPeriod: PropTypes.func,
  sortBy: PropTypes.node,
  isSortedDesc: PropTypes.bool,
  zoneWeightAccessor: PropTypes.string,
  setFocusedZone: PropTypes.func,
  setFilter: PropTypes.func,
  focusedZone: PropTypes.object,
  currentFilter: PropTypes.object,
};

export default GraphContainer;
