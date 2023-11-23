import { useState } from 'react';

export const useToggle = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggle = () => setIsModalOpen(isModalOpen => !isModalOpen);

  return { isModalOpen, openModal, closeModal, toggle };
};
