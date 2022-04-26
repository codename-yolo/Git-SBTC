import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import './modal.scss'

const Modal = ({ children, isOpen, handleClose }) => {
  const eleRef = useRef(null)
  useEffect(() => {
    if (isOpen) {
      eleRef.current.addEventListener('click', handleClose)
    }
    return () => {
      if (eleRef.current) {
        eleRef.current.removeEventListener('click', handleClose)
      }
    }
  }, [])
  if (!isOpen) return null

  return ReactDom.createPortal(
    <div className="modal" ref={eleRef}>
      <button onClick={handleClose} className="close-btn">
        Close
      </button>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById('portal'),
  )
}

export default Modal
