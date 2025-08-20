export enum EVaultInvestorAction {
  UNSPECIFIED = 'UNSPECIFIED',
  VAULT_INVEST = 'VAULT_INVEST',
  VAULT_BURN_LP_TOKEN = 'VAULT_BURN_LP_TOKEN',
  VAULT_REDEEM = 'VAULT_REDEEM',
}

export const EVaultInvestorActionInt: Record<EVaultInvestorAction, number> = Object.freeze({
  [EVaultInvestorAction.UNSPECIFIED]: 0,
  [EVaultInvestorAction.VAULT_INVEST]: 1,
  [EVaultInvestorAction.VAULT_BURN_LP_TOKEN]: 2,
  [EVaultInvestorAction.VAULT_REDEEM]: 3
})
