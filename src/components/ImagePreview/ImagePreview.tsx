import {
  Box,
  IconButton,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBoolean,
} from '@chakra-ui/react'
import CloseIcon from '@mui/icons-material/Close'

export type ImagePreviewProps = {
  src: string
  alt: string
  width?: number
  height?: number
  onRemove?: (src: string) => void
}

export const ImagePreview = ({
  src,
  alt,
  width,
  height,
  onRemove,
}: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useBoolean(false)

  const handleRemove = () => onRemove?.(src)

  return (
    <>
      <Box
        width={width ?? '100px'}
        borderRadius="md"
        height={height ?? '100px'}
        overflow="hidden"
        position="relative"
      >
        {onRemove && (
          <IconButton
            position="absolute"
            size="xs"
            top="3px"
            right="3px"
            borderRadius="100%"
            padding="2px"
            aria-label="remove image"
            variant="ghost"
            onClick={handleRemove}
            icon={<CloseIcon fontSize="small" />}
          />
        )}
        <Image
          cursor={'pointer'}
          onClick={setIsOpen.on}
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
