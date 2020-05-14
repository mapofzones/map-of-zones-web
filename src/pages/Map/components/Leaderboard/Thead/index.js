import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

import classNames from 'classnames/bind';
import styles from '../index.module.css';
const cx = classNames.bind(styles);

const Thead = ({ fixed, isTableOpened, headerGroups }) => {
  const headerWithExplanation = id => {
    switch (id) {
      case 'totalTxs':
      case 'totalIbcTxs':
      case 'ibcSent':
      case 'ibcReceived':
      case 'ibcPercentage':
        return true;
      default:
        return false;
    }
  };

  return (
    <thead
      className={cx(
        { fixed: fixed },
        { active: isTableOpened === 'fixed-thead' },
      )}
      id={fixed ? 'fixed-header' : ''}
    >
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={cx('header', column.id, {
                sortedColumn: column.isSorted,
              })}
            >
              <div
                className={cx('header-container', {
                  ableSortCol: !column.disableSortBy,
                })}
              >
                <div className={cx('IBC-circle', column.id)} />
                {column.render('Header')}
                {headerWithExplanation(column.id) && (
                  <div className={cx('explanation-icon')}>
                    ?
                    <div
                      className={cx('explanation-tooltip', {
                        centerPos:
                          column.id === 'channels' ||
                          column.id === 'ibcReceived',
                      })}
                    >
                      {column.descr}
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

Thead.defaultProps = {
  fixed: PropTypes.bool,
  isTableOpened: PropTypes.string,
  headerGroups: PropTypes.array,
};

Thead.defaultProps = {
  fixed: false,
  isTableOpened: '',
  headerGroups: [],
};

export default Thead;
