import React from 'react'
import { useEffect } from 'react'
import ReactPortal from './ReactPortal'
import './modal2.scss'

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal">
        <button onClick={handleClose} className="close-btn">
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </ReactPortal>
  )
}

export default Modal
