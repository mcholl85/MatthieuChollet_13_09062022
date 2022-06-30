import userReducer from '../features/user'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})
