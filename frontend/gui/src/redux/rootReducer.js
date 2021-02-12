import { combineReducers } from 'redux'
import Blog_Data_reducer from './blog/blogReducer'
import Auth_reducer from './auth/authReducer'

const rootReducer = combineReducers({
  auth: Auth_reducer,
  blog: Blog_Data_reducer
})

export default rootReducer