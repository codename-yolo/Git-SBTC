import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import './index.scss'
import { Modal, Modal2 } from '../../common/index'
import { POSITION } from './constant'

const { TOP_CENTEN, BOTTOM_CENTER, LEFT_CENTER, RIGHT_CENTER } = POSITION
const randomPositon = [TOP_CENTEN, BOTTOM_CENTER, LEFT_CENTER, RIGHT_CENTER]

const PopupPage = () => {
  const eleRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({})
  console.log('mount', isOpen)
  const handleClose = () => {
    setIsOpen(false)
  }
  useEffect(() => {
    console.log('effect run')
    if (isOpen) {
      console.log('popup open')
      let randomIndexPosition = Math.floor(Math.random() * 4)
      const containerPopup = document.querySelector(
        '#react-portal-modal-container',
      )
      updatePopupPosition(
        eleRef.current,
        randomPositon[randomIndexPosition],
        containerPopup,
      )
    }
  }, [isOpen])

  const updatePopupPosition = (button, position, popup) => {
    console.log(position)
    const rect = button.getBoundingClientRect()
    const rectPopup = popup.getBoundingClientRect()
    if (button && position) {
      switch (position) {
        case TOP_CENTEN:
          setPosition({
            left: rect.x - rect.height,
            top: rect.y - rectPopup.height,
          })
          break
        case BOTTOM_CENTER:
          setPosition({
            left: rect.x - rect.height,
            top: rect.y + rect.height,
          })
          break
        case LEFT_CENTER:
          setPosition({
            left: rect.x - rectPopup.width,
            top: rect.y - rectPopup.height / 2 + rect.height / 2,
          })
          break
        case RIGHT_CENTER:
          setPosition({
            left: rect.x + rect.width,
            top: rect.y - rectPopup.height / 2 + rect.height / 2,
          })
          break
        default:
          throw new Error('Error')
      }
    }
  }
  function handleShow() {
    setIsOpen((prev) => {
      return !prev
    })
  }

  return (
    <>
      {console.log('render run')}
      <div className="container-button">
        <button ref={eleRef} onClick={handleShow}>
          Change position in code
        </button>
        {isOpen && (
          <Modal2 isOpen={isOpen} position={position} handleClose={handleClose}>
            <div>
              Awesome content that is never cut off by its parent container!
            </div>
          </Modal2>
        )}
      </div>
    </>
  )
}
export default PopupPage
