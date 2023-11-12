import { ImageItem, Img } from './imageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <>
      <ImageItem>
        <Img src={image.webformatURL} alt={image.tags} />
      </ImageItem>
    </>
  );
};
