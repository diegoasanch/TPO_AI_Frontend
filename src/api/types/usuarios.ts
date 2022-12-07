export type Usuario = {
  documento: string
  nombre: string
  rol: string | null // TODO: Add role enum
}

export type Persona = {
  id: number
  identificador: number
  documento: string
}
