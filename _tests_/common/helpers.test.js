import { getNodeColor } from '../../src/common/helper';

test('Test zone color', () => {
  expect(getNodeColor(1)).toBe('#e9b981');
});
