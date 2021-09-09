import { getNodeColor } from '../../src/common/helper';

test('Test zone color', () => {
  expect(() => {
    getNodeColor(1.1);
  }).toThrow('Position must be between 0 and 1');
  expect(getNodeColor(1)).toBe('#d76969');
  expect(getNodeColor(0.9)).toBe('#d77169');
  expect(getNodeColor(0.8)).toBe('#d77a69');
  expect(getNodeColor(0.7)).toBe('#d78469');
  expect(getNodeColor(0.6)).toBe('#d79569');
  expect(getNodeColor(0.5)).toBe('#eaba82');
  expect(getNodeColor(0.4)).toBe('#c1d061');
  expect(getNodeColor(0.3)).toBe('#9ac172');
  expect(getNodeColor(0.2)).toBe('#82b87c');
  expect(getNodeColor(0.1)).toBe('#6fb085');
  expect(getNodeColor(0)).toBe('#5ca98d');
  expect(() => {
    getNodeColor(-0.1);
  }).toThrow('Position must be between 0 and 1');
});
