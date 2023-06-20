import { isDefined } from './isNullOrUndefined';

export function calculateReturnedRate(
  repeatableAddresses: number | undefined,
  previousActiveAddresees: number | undefined
): number | undefined {
  if (isDefined(previousActiveAddresees) && isDefined(repeatableAddresses)) {
    return repeatableAddresses / previousActiveAddresees;
  }
  return undefined;
}
