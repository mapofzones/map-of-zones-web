import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { useMobileSize } from 'common/hooks';
import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

import styles from './Thead.module.css';

const cx = classNames.bind(styles);

const Thead = ({ period, headerGroups, onHeaderClick }) => {
  const isMobile = useMobileSize();

  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr
          className={cx('fixed-header-container')}
          {...headerGroup.getHeaderGroupProps()}
        >
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={cx('header', column.id, {
                sortedColumn: column.isSorted,
                hasBorderRight: !!column.hasBorderRight,
              })}
              title=""
            >
              <div
                className={cx('header-container', {
                  ableSortCol: !column.disableSortBy,
                })}
              >
                <div className={cx('IBC-circle', column.id)} />
                {column.dependOnPeriod ? (
                  <div onClick={onHeaderClick}>
                    {period === '24h' && 'IBC DAU'}
                    {period === '7d' && 'IBC WAU'}
                    {period === '30d' && 'IBC MAU'}
                  </div>
                ) : (
                  <div className={cx('header-name')} onClick={onHeaderClick}>
                    {column.render('Header')}
                  </div>
                )}
                {!!column.tooltip && !isMobile && (
                  <div className={cx('explanation-icon')}>
                    ?
                    <div
                      className={cx('explanation-tooltip', {
                        centerPos:
                          column.id === 'ibcVolumeSent' ||
                          column.id === 'ibcVolumeReceived' ||
                          column.id === 'ibcActiveAddresses',
                      })}
                    >
                      {column.tooltip}
                    </div>
                  </div>
                )}
                {!column.disableSortBy && (
                  <div className={cx('sortArrowWrapper')}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDown className={cx('arrow')} />
                      ) : (
                        <ArrowDown className={cx('arrow', 'arrowUp')} />
                      )
                    ) : (
                      <div>
                        <ArrowDown className={cx('arrow', 'arrowUp')} />
                        <ArrowDown className={cx('arrow')} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

Thead.propTypes = {
  fixed: PropTypes.bool,
  headerGroups: PropTypes.array,
  onHeaderClick: PropTypes.func,
};

Thead.defaultProps = {
  fixed: false,
  headerGroups: [],
};

export default Thead;