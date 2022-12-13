import { Grid, GridItem } from '@chakra-ui/react'
import { EmptyState } from '../EmptyState/EmptyState'
import { ImagePreview, ImagePreviewProps } from '../ImagePreview/ImagePreview'

export type ImagesProps = {
  images: ImagePreviewProps[]
  firstItem?: React.ReactNode
  onRemoveImage?: (src: string) => void
  withEmptyState?: boolean
}

export const Images = ({
  images,
  onRemoveImage,
  firstItem,
  withEmptyState = true,
}: ImagesProps) => {
  return (
    <Grid
      width="100%"
      templateColumns={{
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(6, 1fr)',
        xl: 'repeat(9, 1fr)',
      }}
      gap="10px"
    >
      {firstItem && <GridItem>{firstItem}</GridItem>}
      {images.map((image, i) => (
        <GridItem key={i}>
          <ImagePreview {...image} onRemove={onRemoveImage} />
        </GridItem>
      ))}
      {withEmptyState && (
        <GridItem colSpan={3}>
          {images.length === 0 && (
            <EmptyState description="Este reclamo no posee imágenes." />
          )}
        </GridItem>
      )}
    </Grid>
  )
}
