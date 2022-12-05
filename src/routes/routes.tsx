import React from 'react'
import { useLocation } from 'react-router-dom'
import { ReclamosPage } from '../pages/Reclamos/Reclamos'
import { ReclamoDetailPage } from '../pages/Reclamos/ReclamoDetail'

export type PageRoute = {
  path: string
  name: string
  component: () => JSX.Element
  params?: readonly string[]
  noSidebar?: boolean
}

export type RedirectRoute = {
  path: string
  redirect: string
}

export type Route = PageRoute | RedirectRoute

const Placeholder = () => {
  const location = useLocation()
  return <div>Placeholder, current route: {location.pathname}</div>
}

export const routes = {
  index: {
    path: '/',
    redirect: 'reclamos', // TODO: create home page
  },
  login: {
    path: '/login',
    name: 'Login',
    component: Placeholder,
    noSidebar: true,
  },

  // Reclamos
  reclamosView: {
    name: 'Reclamos',
    path: '/reclamos',
    component: ReclamosPage,
  },
  reclamosDetail: {
    name: 'Reclamo',
    path: '/reclamos/:id',
    component: ReclamoDetailPage,
    params: ['id'],
  },
  reclamosCreate: {
    name: 'Crear Reclamo',
    path: '/reclamos/create',
    component: Placeholder,
  },

  // Edificios
  edificioView: {
    name: 'Edificios',
    path: '/edificios',
    component: Placeholder,
  },
  edificioDetail: {
    name: 'Edificio',
    path: '/edificios/:id',
    component: Placeholder,
    params: ['id'],
  },
  edificioCreate: {
    name: 'Crear Edificio',
    path: '/edificios/create',
    component: Placeholder,
  },

  // Unidades
  unidadesView: {
    name: 'Unidades',
    path: '/unidades',
    component: Placeholder,
  },
  unidadesDetail: {
    name: 'Unidad',
    path: '/unidades/:id',
    component: Placeholder,
    params: ['id'],
  },
  unidadesCreate: {
    name: 'Crear Unidad',
    path: '/unidades/create',
    component: Placeholder,
  },
  unidadesEdit: {
    name: 'Editar Unidad',
    path: '/unidades/:id/edit',
    component: Placeholder,
    params: ['id'],
  },

  // Usuarios
  usuariosView: {
    name: 'Usuarios',
    path: '/usuarios',
    component: Placeholder,
  },
  usuariosDetail: {
    name: 'Usuario',
    path: '/usuarios/:id',
    component: Placeholder,
    params: ['id'],
  },
  usuariosCreate: {
    name: 'Crear Usuario',
    path: '/usuarios/create',
    component: Placeholder,
  },
  usuariosEdit: {
    name: 'Editar Usuario',
    path: '/usuarios/:id/edit',
    component: Placeholder,
    params: ['id'],
  },
} as const
