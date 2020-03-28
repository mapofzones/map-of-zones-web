const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newRow = () => {
  return {
    name: 'Test',
    totalTxs: Math.floor(Math.random() * 20000),
    ibcAll: Math.floor(Math.random() * 10000),
    ibcPercentage: `${Math.floor(Math.random() * 100)}%`,
    ibcSent: Math.floor(Math.random() * 10000),
    ibcReceived: Math.floor(Math.random() * 10000),
    connections: Math.floor(Math.random() * 100),
  };
};

export function makeLeaderboard(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newRow(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

export function makeGraph(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map(i => {
      return {
        id: i,
        weight: Math.random(),
        sentPercentage: Math.random(),
      };
    }),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  };
}
