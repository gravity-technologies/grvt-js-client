export enum EPointType {
  // Ecosystem point type
  ECOSYSTEM = 'ECOSYSTEM',
  // Trader point type
  TRADER = 'TRADER',
  // Reward season two point type
  SECOND_SESSION = 'SECOND_SESSION',
}

export const EPointTypeInt: Record<EPointType, number> = Object.freeze({
  [EPointType.ECOSYSTEM]: 1,
  [EPointType.TRADER]: 2,
  [EPointType.SECOND_SESSION]: 3
})
