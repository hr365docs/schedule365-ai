import React from 'react';
import Modal from 'react-modal';

const Lightbox = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Lightbox"
    >  <div className='Hr_flex'>
      <img src={imageUrl} alt="Lightbox" style={{width: "100%" , height: "100%"}} />
      <span className='close' onClick={onClose}>×</span>
      </div>
    </Modal>
  );
};

export default Lightbox;
