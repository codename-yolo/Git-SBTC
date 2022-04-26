import HomePage from '../ModalPage'
import TooltipPage from '../TooltipPage'
import ReactTooltip from 'react-tooltip'
import PopupPage from '../PopupPage'
import TableRedux from '../TableReduxToolkit'
import React from 'react'
export default function App() {
  return (
    <React.Fragment>
      {/* <div>
        <ReactTooltip globalEventOff="click" />
        <a data-tip="custom show and hide">( •̀д•́)</a>
        <ReactTooltip />
      </div> */}

      <TableRedux></TableRedux>
      {/* <PopupPage></PopupPage>
      <TooltipPage></TooltipPage>
      <HomePage></HomePage> */}
    </React.Fragment>
  )
}
