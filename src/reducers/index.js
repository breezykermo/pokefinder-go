import { combineReducers } from 'redux'
import location from './location'
import user from './user'
import pokemon from './pokemon'

export default combineReducers({
  location,
  user,
  pokemon,
})
