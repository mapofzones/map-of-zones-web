export interface ChartItemByNumber {
  [key: number]: number;
}

export interface ChartItemByString {
  [key: string]: number;
}

export interface ChartItemWithTime extends ChartItemByString {
  time: number;
  [key: string]: number;
}
