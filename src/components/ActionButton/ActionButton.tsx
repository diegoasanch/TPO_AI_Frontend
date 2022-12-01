import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import { Button } from '@chakra-ui/react'
import { colors } from '@mui/material'
import { getButtonColors } from '../../theme/colors'

export const ActionButtonVariant = {
  add: 'add',
  create: 'create',
  edit: 'edit',
  save: 'save',
}
export type ActionButtonVariant =
  typeof ActionButtonVariant[keyof typeof ActionButtonVariant]

export type ActionButtonProps = {
  variant: ActionButtonVariant
  onClick?: () => void
}

const ActionButtonContent: Record<
  ActionButtonVariant,
  {
    title: string
    icon: JSX.Element
    bgColorGroup: Record<string | number, string>
    initalColorLevel: number
  }
> = {
  [ActionButtonVariant.add]: {
    title: 'Agregar',
    icon: <AddIcon />,
    bgColorGroup: colors.lightBlue,
    initalColorLevel: 300,
  },
  [ActionButtonVariant.create]: {
    title: 'Crear',
    icon: <AddIcon />,
    bgColorGroup: colors.lightBlue,
    initalColorLevel: 400,
  },
  [ActionButtonVariant.edit]: {
    title: 'Editar',
    icon: <EditIcon />,
    bgColorGroup: colors.grey,
    initalColorLevel: 500,
  },
  [ActionButtonVariant.save]: {
    title: 'Guardar',
    icon: <SaveIcon />,
    bgColorGroup: colors.lightGreen,
    initalColorLevel: 500,
  },
} as const

export const ActionButton = ({ variant, onClick }: ActionButtonProps) => {
  const content = ActionButtonContent[variant]
  const colors = getButtonColors(content.bgColorGroup, content.initalColorLevel)

  return (
    <Button
      onClick={onClick}
      variant="contained"
      leftIcon={content.icon}
      bg={colors.normal}
      _active={{ bg: colors.active }}
      _hover={{ bg: colors.hover }}
      color="white"
    >
      {content.title}
    </Button>
  )
}
