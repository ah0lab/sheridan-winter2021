export const BET_RESULTS = {
  WIN: 0,
  LOSS: 1,
  UNDETERMINED: 2
} as const;

export type BET_RESULT = typeof BET_RESULTS[keyof typeof BET_RESULTS];
