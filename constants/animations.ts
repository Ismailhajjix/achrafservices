export const scrollProgressPoints = {
  start: 0,
  visibleStart: 0.2,
  visibleEnd: 0.9,
  end: 1
} as const

export const opacityValues = [1, 1, 0.5, 0]
export const scaleValues = [1, 1, 0.95, 0.9]

export const intersectionObserverDefaults = {
  cardThreshold: 0.2,
  sectionThreshold: 0.1
} as const 