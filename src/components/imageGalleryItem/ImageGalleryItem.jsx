import React, { Component } from 'react';
import { ImageItem, Img } from './imageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

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
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <img src={image.largeImageURL} alt={image.tags} />
            <button onClick={this.closeModal}>close</button>
          </Modal>
        </ImageItem>
      </>
    );
  }
}
