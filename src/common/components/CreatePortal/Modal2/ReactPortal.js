import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

function ReactPortal({ children, wrapperId, style }) {
  const { left = '', top = '', bottom = '', right = '' } = style
  const [wrapperElement, setWrapperElement] = useState(null)
  function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    Object.assign(wrapperElement.style, {
      position: 'absolute',
      top: top.toString() + 'px',
      bottom: bottom.toString() + 'px',
      left: left.toString() + 'px',
      right: right.toString() + 'px',
    })
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])
  if (wrapperElement === null) {
    return null
  }
  return createPortal(children, wrapperElement)
}
export default ReactPortal
