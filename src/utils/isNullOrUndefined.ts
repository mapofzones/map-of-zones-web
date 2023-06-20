export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
  return isDefined(value);
}
