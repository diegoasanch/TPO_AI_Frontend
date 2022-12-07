import { SvgIconComponent } from '@mui/icons-material'
import ApartmentIcon from '@mui/icons-material/Apartment'
import AssignmentIcon from '@mui/icons-material/Assignment'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import PersonIcon from '@mui/icons-material/Person'
import { PageRoute, routes } from '../../routes/routes'

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
