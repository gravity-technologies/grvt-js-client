export enum ERewardSession {
  // The first session
  FIRST_SESSION = 'FIRST_SESSION',
  // The second session
  SECOND_SESSION = 'SECOND_SESSION',
}

export const ERewardSessionInt: Record<ERewardSession, number> = Object.freeze({
  [ERewardSession.FIRST_SESSION]: 1,
  [ERewardSession.SECOND_SESSION]: 2
})
