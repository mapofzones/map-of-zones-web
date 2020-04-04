import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

function TxsActivity({ cell }) {
  return (
    <ResponsiveContainer height={20}>
      <AreaChart data={cell.value} margin={{ bottom: 0 }}>
        <Area
          strokeWidth={2}
          type="linear"
          dataKey="tx"
          stroke="#6ea77f"
          fill="#5CA97B"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TxsActivity;
