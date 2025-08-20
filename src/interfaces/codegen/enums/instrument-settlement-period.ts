export enum EInstrumentSettlementPeriod {
  // Instrument settles through perpetual funding cycles
  PERPETUAL = 'PERPETUAL',
  // Instrument settles at an expiry date, marked as a daily instrument
  DAILY = 'DAILY',
  // Instrument settles at an expiry date, marked as a weekly instrument
  WEEKLY = 'WEEKLY',
  // Instrument settles at an expiry date, marked as a monthly instrument
  MONTHLY = 'MONTHLY',
  // Instrument settles at an expiry date, marked as a quarterly instrument
  QUARTERLY = 'QUARTERLY',
}

export const EInstrumentSettlementPeriodInt: Record<EInstrumentSettlementPeriod, number> = Object.freeze({
  [EInstrumentSettlementPeriod.PERPETUAL]: 1,
  [EInstrumentSettlementPeriod.DAILY]: 2,
  [EInstrumentSettlementPeriod.WEEKLY]: 3,
  [EInstrumentSettlementPeriod.MONTHLY]: 4,
  [EInstrumentSettlementPeriod.QUARTERLY]: 5
})
