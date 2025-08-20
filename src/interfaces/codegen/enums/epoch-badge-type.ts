export enum EEpochBadgeType {
  // Champion
  CHAMPION = 'CHAMPION',
  // Legend
  LEGEND = 'LEGEND',
  // Veteran
  VETERAN = 'VETERAN',
  // Elite
  ELITE = 'ELITE',
  // Master
  MASTER = 'MASTER',
  // Expert
  EXPERT = 'EXPERT',
  // Warrior
  WARRIOR = 'WARRIOR',
  // Sergeant
  SERGEANT = 'SERGEANT',
  // Ranger
  RANGER = 'RANGER',
  // Challenger
  CHALLENGER = 'CHALLENGER',
  // Apprentice
  APPRENTICE = 'APPRENTICE',
  // Rookie
  ROOKIE = 'ROOKIE',
}

export const EEpochBadgeTypeInt: Record<EEpochBadgeType, number> = Object.freeze({
  [EEpochBadgeType.CHAMPION]: 1,
  [EEpochBadgeType.LEGEND]: 2,
  [EEpochBadgeType.VETERAN]: 3,
  [EEpochBadgeType.ELITE]: 4,
  [EEpochBadgeType.MASTER]: 5,
  [EEpochBadgeType.EXPERT]: 6,
  [EEpochBadgeType.WARRIOR]: 7,
  [EEpochBadgeType.SERGEANT]: 8,
  [EEpochBadgeType.RANGER]: 9,
  [EEpochBadgeType.CHALLENGER]: 10,
  [EEpochBadgeType.APPRENTICE]: 11,
  [EEpochBadgeType.ROOKIE]: 12
})
