import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PageTemplate } from '../components/PageTemplate/PageTemplate'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'
import { PageRoute, RedirectRoute, routes } from './routes'

export const appRouter = () => {
  const router = createBrowserRouter(
    Object.values(routes).map((_route) => {
      // If route is a redirect return a redirect object
      if ((_route as RedirectRoute).redirect) {
        const route = _route as RedirectRoute
        return {
          path: route.path,
          element: <Navigate to={route.redirect} />,
        }
      }

      // Treat as normal Page route
      const route = _route as PageRoute
      const Component = route.component

      let element = (
        <PageTemplate hideSidebar={route.noSidebar}>
          <Component />
        </PageTemplate>
      )

      if (!route.noAuth) {
        element = <ProtectedRoute>{element}</ProtectedRoute>
      }

      return {
        path: route.path,
        element,
        caseSensitive: true,
      }
    })
  )

  return router
}
