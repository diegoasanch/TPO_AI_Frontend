import { routes, PageRoute } from '../../routes/routes'
import { SvgIconComponent } from '@mui/icons-material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ApartmentIcon from '@mui/icons-material/Apartment'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import PersonIcon from '@mui/icons-material/Person'

export type SidebarRoute = PageRoute & {
  Icon: SvgIconComponent
}

export const AdminRoutes: readonly SidebarRoute[] = [
  { ...routes.reclamosView, Icon: AssignmentIcon },
  { ...routes.edificioView, Icon: ApartmentIcon },
  { ...routes.unidadesView, Icon: MapsHomeWorkIcon },
  { ...routes.usuariosView, Icon: PersonIcon },
] as const

export const UsuarioRoutes: readonly SidebarRoute[] = [
  { ...routes.reclamosView, Icon: AssignmentIcon },
  { ...routes.unidadesView, Icon: MapsHomeWorkIcon },
] as const
