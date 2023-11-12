import React, { Component } from 'react';
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

export class ModalImage extends Component {
  state = {
    isLoaded: false,
  };

  handleImageLoad = () => this.setState({ isLoaded: true });

  render() {
    const { largeImageURL, tags, isModalOpen, closeModal } = this.props;
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={largeImageURL} alt={tags} onLoad={this.handleImageLoad} />
        <button onClick={closeModal}>close</button>
      </Modal>
    );
  }
}
