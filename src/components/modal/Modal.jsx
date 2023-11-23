import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

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

export const ModalImage = ({
  largeImageURL,
  tags,
  isModalOpen,
  closeModal,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => setIsLoaded(true);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      isLoaded={isLoaded}
    >
      <img src={largeImageURL} alt={tags} onLoad={handleImageLoad} />
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};
