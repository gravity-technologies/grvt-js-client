export enum ESubAccountTradeInterval {
  // 1 month
  SAT_1_MO = 'SAT_1_MO',
  // 1 day
  SAT_1_D = 'SAT_1_D',
  // 1 hour
  SAT_1_H = 'SAT_1_H',
  // 4 hour
  SAT_4_H = 'SAT_4_H',
}

export const ESubAccountTradeIntervalInt: Record<ESubAccountTradeInterval, number> = Object.freeze({
  [ESubAccountTradeInterval.SAT_1_MO]: 1,
  [ESubAccountTradeInterval.SAT_1_D]: 2,
  [ESubAccountTradeInterval.SAT_1_H]: 3,
  [ESubAccountTradeInterval.SAT_4_H]: 4
})
