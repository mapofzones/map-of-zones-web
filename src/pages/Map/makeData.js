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
