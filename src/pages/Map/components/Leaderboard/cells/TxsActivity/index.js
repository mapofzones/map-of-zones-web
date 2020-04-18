import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

function TxsActivity({ cell }) {
  return (
    <ResponsiveContainer height={26}>
      <AreaChart data={cell.value} margin={{ bottom: 0 }}>
        <Area
          strokeWidth={2}
          type="linear"
          dataKey="tx"
          stroke={cell.value[0].tx < cell.value[cell.value.length-1].tx ? "#5ca97b" : "#fc7070" }
          fill={cell.value[0].tx < cell.value[cell.value.length-1].tx ? "#edf6e5" : "#ffeded" }
          fillOpacity="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TxsActivity;
