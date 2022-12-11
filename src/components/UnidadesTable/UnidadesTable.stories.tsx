import { ComponentMeta, ComponentStory } from '@storybook/react'
import { UnidadesTable } from './UnidadesTable'
export default {
  title: 'UnidadesTable',
  component: UnidadesTable,
} as ComponentMeta<typeof UnidadesTable>

const Template: ComponentStory<typeof UnidadesTable> = (args) => (
  <UnidadesTable {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  unidades: [
    {
      id: 8,
      piso: '9',
      numero: '5',
      habitado: true,
      edificio: {
        codigo: 1,
        nombre: 'SLS Puerto Madero',
        direccion: 'Mogliani 425',
      },
      duenio: [
        {
          id: 8,
          identificador: 8,
          documento: 'DNI30306216',
        },
      ],
      inquilinos: [
        {
          id: 1,
          identificador: 8,
          documento: 'CI 13230978',
        },
      ],
    },
    {
      id: 10,
      piso: '9',
      numero: '3',
      habitado: false,
      edificio: {
        codigo: 1,
        nombre: 'SLS Puerto Madero',
        direccion: 'Mogliani 425',
      },
      duenio: [
        {
          id: 10,
          identificador: 10,
          documento: 'DNI30444780',
        },
      ],
      inquilinos: [],
    },
    {
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
  ],
}
