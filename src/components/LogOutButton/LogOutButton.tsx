import React from 'react'
import {
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react'

export type LogOutButtonProps = {
  onClick?: () => void
}

export const LogOutButton = ({ onClick }: LogOutButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button onClick={onClick} variant="ghost">
          <Text>Cerrar sesión</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>¿Está seguro?</PopoverHeader>
        <PopoverBody>
          <Button onClick={onClick} variant="solid">
            Sí, cerrar sesión
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
