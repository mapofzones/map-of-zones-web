export const OSMOSIS_APR = 22.08;
export const OSMOSIS_KEY = 'osmosis-1';

export function resolveStackingApr(zone: string, value?: number): number | undefined {
  return zone === OSMOSIS_KEY ? OSMOSIS_APR : value;
}
