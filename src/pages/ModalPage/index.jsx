import React from 'react'
import { useState } from 'react'
import Modal from '../../common/components/CreatePortal/Modal/Modal'
import Modal2 from '../../common/components/CreatePortal/Modal2/Modal2'
import logo from '../../logo.png'
import './index.scss'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleShowModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <button onClick={handleShowModal}>Click Show Modal</button>
      <Modal2 isOpen={isOpen} handleClose={handleClose}>
        <img src={logo} className="Modal-soul" alt="soul" />
      </Modal2>
    </>
  )
}

export default HomePage
