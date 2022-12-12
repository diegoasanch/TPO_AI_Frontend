import { Usuario } from '../../api/types/usuarios'
import { UsuarioForTable } from './constants'

export const formatUserForTable = (user: Usuario): UsuarioForTable => ({
  id: { data: user.documento },
  nombre: { data: user.nombre },
  role: { data: user.rol || 'null' },
})

export const formatUsersForTable = (users: Usuario[]): UsuarioForTable[] => {
  return users.map(formatUserForTable)
}
