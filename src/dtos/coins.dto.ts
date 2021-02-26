export interface CustomCoinMap {
  [key: number]: number;
}

export interface Coins {
  bars: CustomCoinMap;
  foos: CustomCoinMap;
}

export class CoinsDto {
  public total: number;
  public coins: Coins = { bars: { 1: 0, 2: 0 }, foos: { 1: 0, 5: 0, 10: 0, 20: 0, 50: 0 } };
}
