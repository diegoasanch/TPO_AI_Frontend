export enum Role {
  Inquilino = 'Inquilino',
  Propietario = 'Propietario',
  Administrador = 'Administrador',
}

export type Usuario = {
  documento: string
  nombre: string
  rol: Role | null
}

export type Persona = {
  id: number
  identificador: number
  documento: string
}

export type CreateUsuarioResponse = Pick<Usuario, 'nombre' | 'documento'>

export type LoginResult = {
  documento: string
  jwt: string
}
