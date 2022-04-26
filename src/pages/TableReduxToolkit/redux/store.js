import { configureStore } from '@reduxjs/toolkit'
import datasSlice from './datasSlice'
const store = configureStore({
  reducer: {
    getDatas: datasSlice.reducer,
  },
})

export default store
