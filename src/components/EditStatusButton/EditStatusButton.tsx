import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Spinner,
} from '@chakra-ui/react'
import React from 'react'
import { ClaimStatus } from '../../utils/constants'
import { camelToTitle } from '../../utils/text'

export type EditStatusButtonProps = {
  status: ClaimStatus
  loading: boolean
  onChange: (status: ClaimStatus) => void
}

export const EditStatusButton = ({
  status,
  onChange,
  loading,
}: EditStatusButtonProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as ClaimStatus)
  }

  return (
    <Flex alignItems="center" gap=".5rem">
      <Select
        value={status}
        onChange={changeHandler}
        width="10rem"
        disabled={loading}
      >
        <option disabled>Cambiar estado</option>
        {Object.values(ClaimStatus).map((option) => (
          <option key={option} value={option}>
            {camelToTitle(option)}
          </option>
        ))}
      </Select>
      {loading && <Spinner fontSize="sm" />}
    </Flex>
  )
}
