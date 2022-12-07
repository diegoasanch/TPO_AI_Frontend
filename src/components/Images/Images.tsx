import { Grid, GridItem } from '@chakra-ui/react'
import { ImagePreview, ImagePreviewProps } from '../ImagePreview/ImagePreview'

export type ImagesProps = {
  images: ImagePreviewProps[]
}

export const Images = ({ images }: ImagesProps) => {
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
      {images.map((image, i) => (
        <GridItem key={i}>
          <ImagePreview {...image} />
        </GridItem>
      ))}
    </Grid>
  )
}
