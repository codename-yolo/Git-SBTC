import HomePage from '../ModalPage'
import TooltipPage from '../TooltipPage'
import ReactTooltip from 'react-tooltip'
export default function App() {
  console.log(1)
  console.log(<ReactTooltip></ReactTooltip>)
  return (
    <div>
      <ReactTooltip globalEventOff="click" />

      <a
        data-tip="custom show and hide"
        data-event="click"
        data-event-off="dblclick"
      >
        ( •̀д•́)
      </a>
      <ReactTooltip />
      <TooltipPage></TooltipPage>
      <HomePage></HomePage>
    </div>
  )
}
