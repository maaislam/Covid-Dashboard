import React from 'react';

import ReactDOM from 'react-dom';

import './modal.css';

const Modal = ({ closeAction, children }) => {
  const handleClick = () => {
    console.log('clicked');
    closeAction();
  };

  return ReactDOM.createPortal(
    <div className='ui modals visible active modal__container' onClick={handleClick}>
      <div
        className='ui container standard visible active'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
