export enum EBridgeType {
  // XY Bridge type
  XY = 'XY',
  // Rhino Bridge type
  RHINO = 'RHINO',
}

export const EBridgeTypeInt: Record<EBridgeType, number> = Object.freeze({
  [EBridgeType.XY]: 1,
  [EBridgeType.RHINO]: 2
})
