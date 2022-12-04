import { routes, Route } from '../../routes/routes'

export const AdminRoutes: readonly Route[] = [
  routes.reclamosView,
  routes.edificioView,
  routes.unidadesView,
  routes.usuariosView,
] as const

export const UsuarioRoutes: readonly Route[] = [
  routes.reclamosView,
  routes.unidadesView,
] as const
