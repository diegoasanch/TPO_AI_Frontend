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
  Flex,
  Avatar,
} from '@chakra-ui/react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'

export type SessionButtonProps = {
  userName: string
  onSignOut?: () => void
}

export const SessionButton = ({ onSignOut, userName }: SessionButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          width="100%"
          paddingX=".2rem"
          variant="ghost"
          rightIcon={<UnfoldMoreIcon sx={{ fontSize: '1rem' }} />}
        >
          <Flex direction="row" alignItems="center" gap=".4rem" width="100%">
            <Avatar size="sm" name={userName} bg="grey" />
            <Text fontSize="md">{userName}</Text>
          </Flex>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>{userName}</PopoverHeader>
        <PopoverBody>
          <Button onClick={onSignOut} variant="solid">
            Cerrar sesión
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
