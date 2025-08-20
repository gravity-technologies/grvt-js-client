export enum ERewardProgramType {
  ECOSYSTEM = 'ECOSYSTEM',
  TRADER = 'TRADER',
  LP = 'LP',
}

export const ERewardProgramTypeInt: Record<ERewardProgramType, number> = Object.freeze({
  [ERewardProgramType.ECOSYSTEM]: 1,
  [ERewardProgramType.TRADER]: 2,
  [ERewardProgramType.LP]: 3
})
