import defaultState from './defaultState'
import {
  UPDATE_CURRENT_LOCATION,
  UPDATE_BACKGROUND_LOCATION_ERROR,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LOCATION:
      return state.set('current', action.location)

    case UPDATE_BACKGROUND_LOCATION_ERROR:
      return state.set('error', action.error)

    default:
      return state
  }
}
