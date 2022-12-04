import React from 'react'

import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PageRoute, RedirectRoute, routes } from './routes'
import { PageTemplate } from '../components/PageTemplate/PageTemplate'

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

      return {
        path: route.path,
        element: (
          <PageTemplate hideSidebar={route.noSidebar}>
            <Component />
          </PageTemplate>
        ),
        caseSensitive: true,
      }
    })
  )

  return router
}
