import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as ArrowTop } from 'assets/images/arrow-top.svg';

import PeriodSwitcher from '../PeriodSwitcher';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function ZonesSorter({
  hours,
  setPeriod,
  className,
  isTableOpened,
  sortBy,
  isSortedDesc,
  focusedZoneName,
}) {
  const [decs, setDecs] = useState(true);

  useEffect(() => {
    if (isSortedDesc.tableOrderBy) {
      if (isSortedDesc.tableOrderSort === 'desc') {
        setDecs(true);
      }
      if (isSortedDesc.tableOrderSort === 'asc') {
        setDecs(false);
      }
    }
  }, [isSortedDesc]);
  return (
    <div>
      <div className={cx('container', className)}>
        <div className={cx('sortContainer')}>
          {focusedZoneName && <span>{focusedZoneName}</span>}
          {!focusedZoneName && sortBy && (
            <FormattedMessage
              id="zones-sort-title"
              defaultMessage="{desc} Active Zones {sort}"
              values={{
                desc: decs ? (
                  <FormattedMessage id="most" defaultMessage="Most" />
                ) : (
                  <FormattedMessage id="least" defaultMessage="Least" />
                ),
                sort: (
                  <span className={cx('sort')}>
                    <FormattedMessage
                      id="sort-by"
                      defaultMessage="by {sortBy}"
                      values={{ sortBy }}
                    />
                  </span>
                ),
              }}
            />
          )}
        </div>
      </div>
      <div className={cx('container', 'right', className)}>
        {isTableOpened ? (
          <button type="button" className={cx('closeTableButton')}>
            <ArrowTop className={cx('arrowTop')} />
            <FormattedMessage
              id="back-to-map-title"
              defaultMessage="Back to Map"
            />
          </button>
        ) : (
          <PeriodSwitcher hours={hours} onChange={setPeriod} />
        )}
      </div>
    </div>
  );
}

ZonesSorter.propTypes = {
  hours: PropTypes.number,
  setPeriod: PropTypes.func,
  className: PropTypes.string,
  isTableOpened: PropTypes.string,
  sortBy: PropTypes.node,
  isSortedDesc: PropTypes.bool,
  focusedZoneName: PropTypes.string,
};

export default ZonesSorter;
