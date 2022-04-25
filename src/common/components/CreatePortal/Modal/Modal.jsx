import React from 'react'
import ReactDom from 'react-dom'
import './modal.scss'

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null
  return ReactDom.createPortal(
    <div className="modal">
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById('portal'),
  )
}

export default Modal
