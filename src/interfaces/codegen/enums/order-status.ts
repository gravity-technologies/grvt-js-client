export enum EOrderStatus {
  // Order has been sent to the matching engine and is pending a transition to open/filled/rejected.
  PENDING = 'PENDING',
  // Order is actively matching on the matching engine, could be unfilled or partially filled.
  OPEN = 'OPEN',
  // Order is fully filled and hence closed. Taker Orders can transition directly from pending to filled, without going through open.
  FILLED = 'FILLED',
  // Order is rejected by matching engine since if fails a particular check (See OrderRejectReason). Once an order is open, it cannot be rejected.
  REJECTED = 'REJECTED',
  // Order is cancelled by the user using one of the supported APIs (See OrderRejectReason). Before an order is open, it cannot be cancelled.
  CANCELLED = 'CANCELLED',
}

export const EOrderStatusInt: Record<EOrderStatus, number> = Object.freeze({
  [EOrderStatus.PENDING]: 1,
  [EOrderStatus.OPEN]: 2,
  [EOrderStatus.FILLED]: 3,
  [EOrderStatus.REJECTED]: 4,
  [EOrderStatus.CANCELLED]: 5
})
