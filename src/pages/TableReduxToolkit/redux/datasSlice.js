import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'callApi',
  initialState: {
    datas: []
  },
  reducers: {
    getData: (state, action) => {
      console.log(action)
      state.datas = action.payload
    },
    editData: (state, action) => {
      console.log('reduc edit run')
      state.datas.map((item) => {
        return item.id == action.payload.id
          ? (item.name = action.payload.newData)
          : item
      })
    }
  }
})
