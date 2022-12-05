import { PageRoute } from './routes'

/**
 * Builds a path from a route and a set of parameters.
 *
 * @example ```ts
 * buildRoute(
 *  { path:'/reclamos/:id/ver/:code', params: ['id', 'code'] }, // Route
 *  { id: 1, code: 2 } // Params
 * ) // => /reclamos/1/ver/2
 * ```
 *
 * @param route The route to build the path from.
 * @param params The parameters to replace in the route path.
 * @returns Build path
 */
export const buildRouteParams = <
  T extends Required<Pick<PageRoute, 'path' | 'params'>>
>(
  route: T,
  params: Record<T['params'][number], string | number>
): string => {
  let result = route.path
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`/:${key}`, `/${value}`)
  })
  return result
}
