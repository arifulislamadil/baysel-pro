import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/dataFetch';

const reducer = {
  datas: usersReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;