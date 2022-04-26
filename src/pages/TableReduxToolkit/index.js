import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import datasSlice from './redux/datasSlice'
import { getDataSelector } from './redux/selectors'
import { fixedNumber, formatDate } from '../../common/utils/formatValue'
import './index.css'
const TableRedux = () => {
  const dispatch = useDispatch()
  const datas = useSelector(getDataSelector)
  console.log(datas)
  useEffect(() => {
    const datas = async () => {
      const response = await axios.get(
        'https://625ce68595cd5855d6178b7b.mockapi.io/dataset',
      )
      if (response.status === 200) {
        dispatch(datasSlice.actions.getData(response.data))
      }
    }
    datas()
  }, [])

  return (
    <div>
      <table className="parentTable">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th colSpan="3" style={{ textAlign: 'center' }}>
              Latest transaction
            </th>
          </tr>
          <tr>
            <th style={{ width: '30%', maxWidth: 0 }}>Name</th>
            <th>Shares</th>
            <th>Percentage</th>
            <th>Last update</th>
            <th>Share volume</th>
            <th>Price range</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(
            ({
              id,
              name,
              shares,
              percentage,
              last_update,
              price_range,
              share_volume,
              transaction_date,
            }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{fixedNumber(shares)}</td>
                  <td>{fixedNumber(percentage)}%</td>
                  <td>{formatDate(last_update)}</td>
                  <td>{share_volume}</td>
                  <td>
                    {fixedNumber(price_range.start)} - $
                    {fixedNumber(price_range.end)}
                  </td>
                  <td>{formatDate(transaction_date)}</td>
                </tr>
              )
            },
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableRedux
