import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li key={image.id} className='imageGalleryItem'>
        <img className='imageGalleryItem-image' src={image.webformatURL} alt="" onClick={handleOpenModal} />
      </li>
      {isModalOpen && (
        <Modal largeImageURL={image.largeImageURL} onClose={handleCloseModal} />
      )}
    </>
  );
};