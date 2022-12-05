import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ReclamosTable } from './ReclamosTable'
export default {
  title: 'ReclamosTable',
  component: ReclamosTable,
} as ComponentMeta<typeof ReclamosTable>

const Template: ComponentStory<typeof ReclamosTable> = (args) => (
  <ReclamosTable {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  reclamos: [
    {
      numero: 5,
      usuario: {
        documento: 'DNI30161468',
        nombre: 'GONZALEZ, EMMANUEL            ',
        rol: null,
      },
      edificio: {
        codigo: 1,
        nombre: 'SLS Puerto Madero',
        direccion: 'Mogliani 425',
      },
      ubicacion: 'qskndpsk',
      descripcion: 'Q c yo',
      unidad: {
        id: 11,
        piso: '9',
        numero: '2',
        habitado: true,
        edificio: {
          codigo: 1,
          nombre: 'SLS Puerto Madero',
          direccion: 'Mogliani 425',
        },
        duenio: [
          {
            id: 11,
            identificador: 11,
            documento: 'DNI30600888',
          },
          {
            id: 1592,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
        inquilinos: [
          {
            id: 260,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
      },
      estado: 'nuevo',
      imagenes: [
        {
          numero: 1,
          direccion:
            'http://res.cloudinary.com/duveiypiy/image/upload/v1666060674/aovbhqb7glnfzmflif1l.jpg',
          tipo: 'jpg',
        },
      ],
    },
    {
      numero: 4,
      usuario: {
        documento: 'DNI30161468',
        nombre: 'GONZALEZ, EMMANUEL            ',
        rol: null,
      },
      edificio: {
        codigo: 1,
        nombre: 'SLS Puerto Madero',
        direccion: 'Mogliani 425',
      },
      ubicacion: 'qskndpsk',
      descripcion: 'Caño roto',
      unidad: {
        id: 11,
        piso: '9',
        numero: '2',
        habitado: true,
        edificio: {
          codigo: 1,
          nombre: 'SLS Puerto Madero',
          direccion: 'Mogliani 425',
        },
        duenio: [
          {
            id: 11,
            identificador: 11,
            documento: 'DNI30600888',
          },
          {
            id: 1592,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
        inquilinos: [
          {
            id: 260,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
      },
      estado: 'enProceso',
      imagenes: [],
    },
    {
      numero: 92,
      usuario: {
        documento: 'DNI30161468',
        nombre: 'GONZALEZ, EMMANUEL            ',
        rol: null,
      },
      edificio: {
        codigo: 1,
        nombre: 'SLS Puerto Madero',
        direccion: 'Mogliani 425',
      },
      ubicacion: 'qskndpsk',
      descripcion: 'sñdlmasla',
      unidad: {
        id: 11,
        piso: '9',
        numero: '2',
        habitado: true,
        edificio: {
          codigo: 1,
          nombre: 'SLS Puerto Madero',
          direccion: 'Mogliani 425',
        },
        duenio: [
          {
            id: 11,
            identificador: 11,
            documento: 'DNI30600888',
          },
          {
            id: 1592,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
        inquilinos: [
          {
            id: 260,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
      },
      estado: 'enProceso',
      imagenes: [],
    },
    {
      numero: 7,
      usuario: {
        documento: 'DNI30161468',
        nombre: 'GONZALEZ, EMMANUEL            ',
        rol: null,
      },
      edificio: {
        codigo: 1,
        nombre: 'SLS Puerto Madero',
        direccion: 'Mogliani 425',
      },
      ubicacion: 'qskndpsk',
      descripcion: 'Luz rota',
      unidad: {
        id: 11,
        piso: '9',
        numero: '2',
        habitado: true,
        edificio: {
          codigo: 1,
          nombre: 'SLS Puerto Madero',
          direccion: 'Mogliani 425',
        },
        duenio: [
          {
            id: 11,
            identificador: 11,
            documento: 'DNI30600888',
          },
          {
            id: 1592,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
        inquilinos: [
          {
            id: 260,
            identificador: 11,
            documento: 'CI 13230978',
          },
        ],
      },
      estado: 'enProceso',
      imagenes: [],
    },
  ],
}
