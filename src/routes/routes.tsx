import { useLocation } from 'react-router-dom'
import { CreateEdificio } from '../pages/Edificios/CreateEdificio'
import { EdificioDetail } from '../pages/Edificios/EdificioDetail'
import { EdificiosPage } from '../pages/Edificios/Edificios'
import { CreateReclamo } from '../pages/Reclamos/CreateReclamo'
import { ReclamoDetailPage } from '../pages/Reclamos/ReclamoDetail'
import { ReclamosPage } from '../pages/Reclamos/Reclamos'
import { CreateUnidad } from '../pages/Unidades/CreateUnidad'
import { UnidadDetail } from '../pages/Unidades/UnidadDetail'
import { UnidadesPage } from '../pages/Unidades/Unidades'
import { CreateUsuario } from '../pages/Usuarios/CreateUsuario'
import { UsuariosPage } from '../pages/Usuarios/Usuarios'

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
    component: CreateReclamo,
  },

  // Edificios
  edificioView: {
    name: 'Edificios',
    path: '/edificios',
    component: EdificiosPage,
  },
  edificioDetail: {
    name: 'Edificio',
    path: '/edificios/:id',
    component: EdificioDetail,
    params: ['id'],
  },
  edificioCreate: {
    name: 'Crear Edificio',
    path: '/edificios/create',
    component: CreateEdificio,
  },

  // Unidades
  unidadesView: {
    name: 'Unidades',
    path: '/unidades',
    component: UnidadesPage,
  },
  unidadesDetail: {
    name: 'Unidad',
    path: '/unidades/:id',
    component: UnidadDetail,
    params: ['id'],
  },
  unidadesCreate: {
    name: 'Crear Unidad',
    path: '/unidades/create',
    component: CreateUnidad,
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
    component: UsuariosPage,
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
    component: CreateUsuario,
  },
  usuariosEdit: {
    name: 'Editar Usuario',
    path: '/usuarios/:id/edit',
    component: Placeholder,
    params: ['id'],
  },
} as const
