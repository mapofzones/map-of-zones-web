import React, { useMemo } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

import { getIsUptrend } from 'common/helper';

function TxsActivity({ cell }) {
  const isUptrend = useMemo(() => getIsUptrend(cell.value), [cell.value]);

  return (
    <ResponsiveContainer height={26}>
      <AreaChart data={cell.value} margin={{ bottom: 0 }}>
        <Area
          strokeWidth={2}
          type="linear"
          dataKey="txs"
          stroke={isUptrend ? '#5ca97b' : '#fc7070'}
          fill={isUptrend ? '#edf6e5' : '#ffeded'}
          fillOpacity="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default TxsActivity;
