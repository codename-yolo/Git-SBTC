import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import datasSlice from './redux/datasSlice'
import { getDataSelector } from './redux/selectors'
import RenderTable from './renderTable'
import './index.css'
const TableRedux = () => {
  console.log('parent')
  const dispatch = useDispatch()
  const datas = useSelector(getDataSelector)
  useEffect(() => {
    const datas = async () => {
      const response = await axios.get(
        'https://625ce68595cd5855d6178b7b.mockapi.io/dataset'
      )
      if (response.status === 200) {
        dispatch(datasSlice.actions.getData(response.data))
      }
    }
    datas()
  }, [])

  const funcDispatch = useCallback((value) => {
    dispatch(datasSlice.actions.editData(value))
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
          {datas.map((item, index) => {
            return (
              <RenderTable
                dispatch={funcDispatch}
                key={item.id}
                data={item}
                index={index}
              ></RenderTable>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableRedux
