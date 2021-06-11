import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { useMobileSize } from 'common/hooks';
import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

import styles from '../index.module.css';

const cx = classNames.bind(styles);

const Thead = ({ headerGroups, onHeaderClick }) => {
  const isMobile = useMobileSize();

  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={cx('header', column.id, {
                ibcReceived: column.Header === 'IBC Success',
                ibcSent: column.Header === 'IBC Failed',
                sortedColumn: column.isSorted,
              })}
            >
              <div className={cx('header-title')}>
                {column.id === 'ibc_tx_1d_failed' && '24H'}
                {column.id === 'ibc_tx_7d_failed' && 'LAST 7D'}
                {column.id === 'ibc_tx_30d_failed' && 'LAST 30D'}
              </div>
              <div
                className={cx('header-container', {
                  ableSortCol: !column.disableSortBy,
                })}
              >
                <div
                  className={cx('IBC-circle', {
                    ibcReceived: column.Header === 'IBC Success',
                    ibcSent: column.Header === 'IBC Failed',
                  })}
                />
                <div onClick={onHeaderClick}>{column.render('Header')}</div>
                {!!column.tooltip && !isMobile && (
                  <div className={cx('explanation-icon')}>
                    ?
                    <div
                      className={cx('explanation-tooltip', {
                        centerPos:
                          column.id === 'channels' ||
                          column.id === 'ibcReceived',
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
  headerGroups: PropTypes.array,
  onHeaderClick: PropTypes.func,
};

Thead.defaultProps = {
  headerGroups: [],
};

export default Thead;
