import { max, min } from '../utils/numbers'

export const getButtonColors = (
  colorGroup: Record<string | number, string>,
  initialLevel: number
) => {
  return {
    normal: colorGroup[initialLevel],
    hover: colorGroup[max(initialLevel - 100, 50)],
    active: colorGroup[min(initialLevel + 100, 900)],
  }
}
