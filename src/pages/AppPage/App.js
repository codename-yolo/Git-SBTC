import HomePage from '../ModalPage'
import TooltipPage from '../TooltipPage'
import ReactTooltip from 'react-tooltip'
import React from 'react'
export default function App() {
  return (
    <React.Fragment>
      <div>
        <ReactTooltip globalEventOff="click" />
        <a data-tip="custom show and hide">( •̀д•́)</a>
        <ReactTooltip />
      </div>

      <TooltipPage></TooltipPage>
      <HomePage></HomePage>
    </React.Fragment>
  )
}
