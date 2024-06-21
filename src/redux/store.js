import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './reducer'

export default configureStore({
    reducer: {
        todo: TodoReducer
    },
  })