import {
  Avatar,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { LoggedUser } from '../../api/types/usuarios'

export type SessionButtonProps = {
  user: LoggedUser
  onSignOut?: () => void
}

export const SessionButton = ({ onSignOut, user }: SessionButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          width="100%"
          paddingX=".2rem"
          variant="ghost"
          rightIcon={<UnfoldMoreIcon sx={{ fontSize: '1rem' }} />}
        >
          <Flex direction="row" alignItems="center" gap=".8rem" width="100%">
            <Avatar size="sm" name={user.name} bg="grey" />
            <Text fontSize="md">{user.name}</Text>
          </Flex>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          {user.name} - {user.documento}
        </PopoverHeader>
        <PopoverBody>
          <Button onClick={onSignOut} variant="solid">
            Cerrar sesión
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
