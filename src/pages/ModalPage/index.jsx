import React from 'react'
import { useState, useRef } from 'react'
import { Modal, Modal2 } from '../../common/index'
import logo from '../../logo.png'
import './index.scss'

const HomePage = () => {
  const parentModal = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    console.log('close')
    setIsOpen(false)
  }
  const handleShowModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <button ref={parentModal} onClick={handleShowModal}>
        Click Show Modal
      </button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <img src={logo} className="Modal-soul" alt="soul" />
      </Modal>
    </>
  )
}

export default HomePage
