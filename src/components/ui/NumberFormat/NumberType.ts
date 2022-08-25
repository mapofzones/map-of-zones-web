export enum NumberType {
  Number = 'number',
  Currency = 'currency',
  Percent = 'percent',
}

// eslint-disable-next-line sort-exports/sort-exports
export const NUMBER_STYLE_MAP = {
  [NumberType.Number]: 'decimal',
  [NumberType.Currency]: 'currency',
  [NumberType.Percent]: 'percent',
};
