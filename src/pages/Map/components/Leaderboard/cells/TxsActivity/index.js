import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

function TxsActivity({ cell }) {
  return (
    <ResponsiveContainer height={26}>
      <AreaChart data={cell.value} margin={{ bottom: 0 }}>
        <Area
          strokeWidth={2}
          type="linear"
          dataKey="txs"
          stroke={
            cell.value[0].txs < cell.value[cell.value.length - 1].txs
              ? '#5ca97b'
              : '#fc7070'
          }
          fill={
            cell.value[0].txs < cell.value[cell.value.length - 1].txs
              ? '#edf6e5'
              : '#ffeded'
          }
          fillOpacity="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default TxsActivity;
