import React from 'react';
import { ImageItem, Img } from './imageGalleryItem.styled';
import { ModalImage } from '../modal/Modal';
import { useToggle } from '../hooks/useToggle';

export const ImageGalleryItem = ({ image }) => {
  const { isModalOpen, openModal, closeModal } = useToggle();

  const { webformatURL, tags, largeImageURL, key } = image;

  return (
    <>
      <ImageItem>
        <Img src={webformatURL} key={key} alt={tags} onClick={openModal} />
        <ModalImage
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
          key={key}
        />
      </ImageItem>
    </>
  );
};
