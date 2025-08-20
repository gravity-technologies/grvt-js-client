export enum ECancelStatus {
  // Cancellation has expired because corresponding order had not arrived within the defined time-to-live window.
  EXPIRED = 'EXPIRED',
  // This cancellation request was dropped because its TTL window overlaps with another cancellation request for the same order.
  DROPPED_DUPLICATE = 'DROPPED_DUPLICATE',
}

export const ECancelStatusInt: Record<ECancelStatus, number> = Object.freeze({
  [ECancelStatus.EXPIRED]: 1,
  [ECancelStatus.DROPPED_DUPLICATE]: 2
})
