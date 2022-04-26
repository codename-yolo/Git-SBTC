import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'callApi',
  initialState: {
    datas: [],
  },
  reducers: {
    getData: (state, action) => {
      state.datas = action.payload
    },
  },
})
