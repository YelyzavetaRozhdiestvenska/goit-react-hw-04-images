import { Gallery } from './imageGallery.styled';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} className="gallery" />
      ))}
    </Gallery>
  );
};
