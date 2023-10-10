// components/Modal.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className='modalContent'>
                <button className='closeButton' onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
