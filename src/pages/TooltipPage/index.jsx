import React from 'react'
import Tooltip from '../../common/components/Tooltip/Tooltip'
import './index.scss'
const TooltipPage = () => {
  return (
    <div className="container">
      <h1>Hello, this is a Tooltip </h1>
      <div className="example-wrapper">
        <Tooltip content="Yee-haw!" direction="right">
          <span className="example-emoji" role="img" aria-label="cowboy emoji">
            🤠
          </span>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip content="Quack!" direction="top">
          <span className="example-emoji" role="img" aria-label="duck emoji">
            🦆
          </span>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip
          content="Ring-ding-ding-ding-dingeringeding!"
          direction="bottom"
        >
          <span className="example-emoji" role="img" aria-label="fox emoji">
            🦊
          </span>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip
          content={
            <>
              Bring me
              <br />
              to your leader
            </>
          }
          direction="left"
          delay="0"
        >
          <span className="example-emoji" role="img" aria-label="alien emoji">
            👽
          </span>
        </Tooltip>
      </div>

      <div className="example-wrapper">
        <Tooltip
          content={
            <span role="img" aria-label="rabbit emoji">
              🐇
            </span>
          }
          direction="bottom"
        >
          <span className="example-emoji" role="img" aria-label="tophat emoji">
            🎩
          </span>
        </Tooltip>
      </div>
    </div>
  )
}

export default TooltipPage
