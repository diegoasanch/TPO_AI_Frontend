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
