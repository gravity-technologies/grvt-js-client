// Specifies different methods of aggregating historical funding rates
export enum EFundingRateAggregationType {
  // Default value -- one record returned per funding interval. Query instruments endpoint to learn funding interval of each instrument.
  FUNDING_INTERVAL = 'FUNDING_INTERVAL',
  // Returns one record per hour -- normalizes all funding rates to 1h durations, so `fundingRate`  value is cumulative and can exceed a funding interval's configured cap / floor.
  ONE_HOURLY = 'ONE_HOURLY',
  // Returns one record per 4 hours -- normalizes all funding rates to 4h durations, so `fundingRate`  value is cumulative and can exceed a funding interval's configured cap / floor.
  FOUR_HOURLY = 'FOUR_HOURLY',
  // Returns one record for eight hours -- normalizes all funding rates to 8h durations, so `fundingRate`  value is cumulative and can exceed a funding interval's configured cap / floor.
  EIGHT_HOURLY = 'EIGHT_HOURLY',
}

export const EFundingRateAggregationTypeInt: Record<EFundingRateAggregationType, number> = Object.freeze({
  [EFundingRateAggregationType.FUNDING_INTERVAL]: 1,
  [EFundingRateAggregationType.ONE_HOURLY]: 2,
  [EFundingRateAggregationType.FOUR_HOURLY]: 3,
  [EFundingRateAggregationType.EIGHT_HOURLY]: 4
})
