export enum ECandlestickInterval {
  // 1 minute
  CI_1_M = 'CI_1_M',
  // 3 minutes
  CI_3_M = 'CI_3_M',
  // 5 minutes
  CI_5_M = 'CI_5_M',
  // 15 minutes
  CI_15_M = 'CI_15_M',
  // 30 minutes
  CI_30_M = 'CI_30_M',
  // 1 hour
  CI_1_H = 'CI_1_H',
  // 2 hour
  CI_2_H = 'CI_2_H',
  // 4 hour
  CI_4_H = 'CI_4_H',
  // 6 hour
  CI_6_H = 'CI_6_H',
  // 8 hour
  CI_8_H = 'CI_8_H',
  // 12 hour
  CI_12_H = 'CI_12_H',
  // 1 day
  CI_1_D = 'CI_1_D',
  // 3 days
  CI_3_D = 'CI_3_D',
  // 5 days
  CI_5_D = 'CI_5_D',
  // 1 week
  CI_1_W = 'CI_1_W',
  // 2 weeks
  CI_2_W = 'CI_2_W',
  // 3 weeks
  CI_3_W = 'CI_3_W',
  // 4 weeks
  CI_4_W = 'CI_4_W',
}

export const ECandlestickIntervalInt: Record<ECandlestickInterval, number> = Object.freeze({
  [ECandlestickInterval.CI_1_M]: 1,
  [ECandlestickInterval.CI_3_M]: 2,
  [ECandlestickInterval.CI_5_M]: 3,
  [ECandlestickInterval.CI_15_M]: 4,
  [ECandlestickInterval.CI_30_M]: 5,
  [ECandlestickInterval.CI_1_H]: 6,
  [ECandlestickInterval.CI_2_H]: 7,
  [ECandlestickInterval.CI_4_H]: 8,
  [ECandlestickInterval.CI_6_H]: 9,
  [ECandlestickInterval.CI_8_H]: 10,
  [ECandlestickInterval.CI_12_H]: 11,
  [ECandlestickInterval.CI_1_D]: 12,
  [ECandlestickInterval.CI_3_D]: 13,
  [ECandlestickInterval.CI_5_D]: 14,
  [ECandlestickInterval.CI_1_W]: 15,
  [ECandlestickInterval.CI_2_W]: 16,
  [ECandlestickInterval.CI_3_W]: 17,
  [ECandlestickInterval.CI_4_W]: 18
})
