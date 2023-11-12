import React, { Component } from 'react';
import { ImageItem, Img } from './imageGalleryItem.styled';
import { ModalImage } from '../modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { image } = this.props;
    return (
      <>
        <ImageItem>
          <Img
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.openModal}
          />
          <ModalImage
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        </ImageItem>
      </>
    );
  }
}
