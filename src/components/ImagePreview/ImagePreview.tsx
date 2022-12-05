import {
  Box,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBoolean,
} from '@chakra-ui/react'
import React from 'react'

export type ImagePreviewProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const ImagePreview = ({
  src,
  alt,
  width,
  height,
}: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useBoolean(false)

  return (
    <>
      <Box
        cursor={'pointer'}
        width={width ?? '100px'}
        borderRadius="md"
        onClick={setIsOpen.on}
        height={height ?? '100px'}
        overflow="hidden"
      >
        <Image
          src={src}
          alt={alt}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Modal isOpen={isOpen} onClose={setIsOpen.off}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Image src={src} alt={alt} width="100%" height="100%" />
        </ModalContent>
      </Modal>
    </>
  )
}
