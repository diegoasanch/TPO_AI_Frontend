/**
 * Converts camelCase text to Title Case
 * @example ```ts
 * toTitleCase('camelCase') // => Camel Case
 * ```
 */
export const camelToTitle = (text: string) => {
  const result = text.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}
