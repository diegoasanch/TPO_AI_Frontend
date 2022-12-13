import { Button } from '@chakra-ui/react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import { useRef } from 'react'
import { Images } from '../Images/Images'

export type LocalImage = {
  src: string
  file: File
}

export type ImageSelectorProps = {
  images: LocalImage[]
  setImages: React.Dispatch<React.SetStateAction<LocalImage[]>>
}

export const ImageSelector = ({ images, setImages }: ImageSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSelectImageClick = () => {
    inputRef.current?.click()
  }

  const deleteImage = (src: string) => {
    setImages(images.filter((image) => image.src !== src))
  }

  const addImage = (file: File) => {
    const src = URL.createObjectURL(file)
    setImages((prevImages) => [...prevImages, { src, file }])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        addImage(files[i])
      }
    }
  }

  return (
    <>
      <input
        multiple
        accept="image/*"
        onChange={handleFileChange}
        ref={inputRef}
        type="file"
        hidden
      />
      <Images
        images={images.map((image) => ({
          src: image.src,
          alt: image.file.name,
        }))}
        onRemoveImage={deleteImage}
        withEmptyState={false}
        firstItem={
          <Button
            display="flex"
            width={'100px'}
            borderRadius="md"
            height={'100px'}
            overflow="hidden"
            position="relative"
            alignItems="center"
            justifyContent="center"
            onClick={handleSelectImageClick}
          >
            <AddAPhotoIcon />
          </Button>
        }
      />
    </>
  )
}
