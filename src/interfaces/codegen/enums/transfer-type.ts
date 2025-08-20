export enum ETransferType {
  // Default transfer that has nothing to do with bridging
  UNSPECIFIED = 'UNSPECIFIED',
  // Standard transfer that has nothing to do with bridging
  STANDARD = 'STANDARD',
  // Fast Arb Deposit Metadata type
  FAST_ARB_DEPOSIT = 'FAST_ARB_DEPOSIT',
  // Fast Arb Withdrawal Metadata type
  FAST_ARB_WITHDRAWAL = 'FAST_ARB_WITHDRAWAL',
  // Transfer type for non native bridging deposit
  NON_NATIVE_BRIDGE_DEPOSIT = 'NON_NATIVE_BRIDGE_DEPOSIT',
  // Transfer type for non native bridging withdrawal
  NON_NATIVE_BRIDGE_WITHDRAWAL = 'NON_NATIVE_BRIDGE_WITHDRAWAL',
}

export const ETransferTypeInt: Record<ETransferType, number> = Object.freeze({
  [ETransferType.UNSPECIFIED]: 0,
  [ETransferType.STANDARD]: 1,
  [ETransferType.FAST_ARB_DEPOSIT]: 2,
  [ETransferType.FAST_ARB_WITHDRAWAL]: 3,
  [ETransferType.NON_NATIVE_BRIDGE_DEPOSIT]: 4,
  [ETransferType.NON_NATIVE_BRIDGE_WITHDRAWAL]: 5
})
