import React from 'react'
import { useEffect } from 'react'
import ReactPortal from './ReactPortal'
import debounce from 'lodash/debounce'
import './modal2.scss'

const Modal = ({ children, isOpen, handleClose, position }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.addEventListener('keydown', closeOnEscapeKey)
    // const handleClickClose = () => {
    //   handleClose()
    // }
    // document.addEventListener('click', handleClickClose)
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey)
      // document.removeEventListener('click', handleClickClose)
    }
  }, [])
  if (!isOpen) return null

  return (
    <ReactPortal
      style={{ ...position }}
      wrapperId="react-portal-modal-container"
    >
      {children}
    </ReactPortal>
  )
}

export default Modal
