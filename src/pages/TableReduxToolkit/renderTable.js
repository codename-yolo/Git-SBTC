import React, { useState, memo } from 'react'
import { fixedNumber, formatDate } from '../../common/utils/formatValue'

const RenderTable = ({ data, dispatch, index }) => {
  console.log('render table')
  const {
    id,
    name,
    shares,
    percentage,
    last_update,
    share_volume,
    price_range,
    transaction_date
  } = data
  const [newData, setNewData] = useState('abc')
  const handleOnchange = (e) => {
    setNewData(e.target.value)
  }
  return (
    <>
      <tr>
        <td>
          {name}
          <input
            type="text"
            value={newData}
            onChange={(e) => {
              handleOnchange(e)
            }}
          />
          <button
            onClick={() => {
              dispatch({ id, newData, index })
            }}
          >
            Save
          </button>
        </td>
        <td>{fixedNumber(shares)}</td>
        <td>{fixedNumber(percentage)}%</td>
        <td>{formatDate(last_update)}</td>
        <td>{share_volume}</td>
        <td>
          {fixedNumber(price_range.start)} - ${fixedNumber(price_range.end)}
        </td>
        <td>{formatDate(transaction_date)}</td>
      </tr>
    </>
  )
}

export default memo(RenderTable)
