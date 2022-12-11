import {
  Flex,
  IconButton,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  Spinner,
} from '@chakra-ui/react'
import ErrorIcon from '@mui/icons-material/Error'
import { colors } from '@mui/material'

export type SelectItem = {
  value: string
  label: string
  disabled?: boolean
}

export type SelectProps = {
  value: SelectItem | undefined
  items: SelectItem[]
  loading?: boolean
  error?: boolean
  onRetry?: () => void
  onChange: (status: SelectItem) => void
  ChakraSelectProps?: ChakraSelectProps
}

export const Select = ({
  value,
  items,
  loading,
  error,
  onRetry,
  onChange,
  ChakraSelectProps,
}: SelectProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = items.find((item) => item.value === e.target.value)
    if (!selected) return

    onChange(selected)
  }

  return (
    <Flex alignItems="center" gap=".5rem">
      <ChakraSelect
        value={value?.value}
        onChange={changeHandler}
        width="10rem"
        disabled={loading || error}
        {...ChakraSelectProps}
      >
        <option disabled>Cambiar estado</option>
        {items.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={!!option.disabled}
          >
            {option.label}
          </option>
        ))}
      </ChakraSelect>
      {loading && <Spinner fontSize="sm" />}
      {error &&
        (onRetry ? (
          <IconButton
            aria-label="reintentar"
            variant="ghost"
            icon={<ErrorIcon htmlColor={colors.red[600]} />}
          />
        ) : (
          <ErrorIcon htmlColor={colors.red[600]} />
        ))}
    </Flex>
  )
}
