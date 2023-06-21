export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

export function isNullOrUndefined<T>(value: T | undefined | null): value is NonNullable<T> {
  return !isDefined(value);
}
