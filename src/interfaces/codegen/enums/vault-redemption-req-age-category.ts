// Denotes the age category of a given redemption request.
//
//
export enum EVaultRedemptionReqAgeCategory {
  // This request is at least as old as the minimum redemption period, and is eligible for automated redemption.
  NORMAL = 'NORMAL',
  // This request is nearing the maxmimum redemption period and will be factored into pre-order check margin requirements.
  URGENT = 'URGENT',
  // This request has exceeded the maximum redemption period and will be considered for forced redemptions.
  OVERDUE = 'OVERDUE',
  // This request has yet to exceed the minimum redemption period, and is not yet eligible for automated redemption.
  PRE_MIN = 'PRE_MIN',
}

export const EVaultRedemptionReqAgeCategoryInt: Record<EVaultRedemptionReqAgeCategory, number> = Object.freeze({
  [EVaultRedemptionReqAgeCategory.NORMAL]: 1,
  [EVaultRedemptionReqAgeCategory.URGENT]: 2,
  [EVaultRedemptionReqAgeCategory.OVERDUE]: 3,
  [EVaultRedemptionReqAgeCategory.PRE_MIN]: 4
})
