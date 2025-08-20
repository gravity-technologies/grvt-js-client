export enum EVaultType {
  // Prime vault
  PRIME = 'PRIME',
  // Launchpad vault
  LAUNCH_PAD = 'LAUNCH_PAD',
}

export const EVaultTypeInt: Record<EVaultType, number> = Object.freeze({
  [EVaultType.PRIME]: 1,
  [EVaultType.LAUNCH_PAD]: 2
})
