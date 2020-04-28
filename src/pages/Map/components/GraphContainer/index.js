import React from 'react';
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
  isTableOpened,
  toggleTableOpen,
  setPeriod,
  sortBy,
  isSortedDesc,
}) {
  return (
    <div className={cx('container')}>
      <Graph period={period.name} data={zonesStat} isBlurred={isTableOpened} />
      <Logo className={cx('logo')} />
      <ZonesFilter
        sortBy={sortBy}
        isSortedDesc={isSortedDesc}
        hours={period.hours}
        setPeriod={setPeriod}
        className={cx('filter')}
        isTableOpened={isTableOpened}
        toggleTableOpen={toggleTableOpen}
      />
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
  toggleTableOpen: PropTypes.func,
  setPeriod: PropTypes.func,
  sortBy: PropTypes.node,
  isSortedDesc: PropTypes.bool,
};

export default GraphContainer;
