import React, { useState, useRef, useEffect } from 'react'
import './index.scss'
import { Modal, Modal2 } from '../../common/index'
import { POSITION } from './constant'

const { TOP_CENTEN, BOTTOM_CENTER, LEFT_CENTER, RIGHT_CENTER } = POSITION
const randomPositon = [TOP_CENTEN, BOTTOM_CENTER, LEFT_CENTER, RIGHT_CENTER]
const PopupPage = () => {
  const btnRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({})

  const handleClose = () => {
    setIsOpen(false)
  }
  useEffect(() => {
    const containerButton = document.querySelector('.container-button')

    function handleClickClose() {
      setIsOpen(false)
    }
    const handlePopup = (e) => {
      let randomIndexPosition = Math.floor(Math.random() * 4)
      setIsOpen(!isOpen)
      updatePopupPosition(e.target, randomPositon[randomIndexPosition])
      window.addEventListener('dblclick', handleClickClose)
    }
    if (containerButton) {
      Array.from(containerButton.children).forEach((item) => {
        item.addEventListener('click', handlePopup)
      })
    }

    return () => {
      window.addEventListener('dblclick', handleClickClose)
    }
  }, [])

  const updatePopupPosition = (button, position, popup) => {
    console.log(popup)
    const rect = button.getBoundingClientRect()
    if (button && position) {
      switch (position) {
        case TOP_CENTEN:
          setPosition({
            left: rect.x,
            top: rect.y + window.scrollY + rect.height,
            transform: 'translate(-12%, -122%)',
          })
          break
        case BOTTOM_CENTER:
          setPosition({
            left: rect.x + rect.width / 2,
            top: rect.y + window.scrollY,
            transform: ' translate(-50%, 22%)',
          })
          break
        case LEFT_CENTER:
          setPosition({
            left: rect.x,
            top: rect.y + window.scrollY,
            transform: ' translate(-100%, -42%)',
          })
          break
        case RIGHT_CENTER:
          setPosition({
            left: rect.x + rect.width / 2,
            top: rect.y + window.scrollY,
            transform: ' translate(40%, -42%)',
          })
          break
        default:
          throw new Error('Error')
      }
    }
  }
  return (
    <>
      <div className="container-button">
        <button ref={btnRef}>Change position in code</button>

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
