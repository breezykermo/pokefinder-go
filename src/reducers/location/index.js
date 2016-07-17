import defaultState from './defaultState'
import { UPDATE_LOCATION } from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      // TODO:
      return state

    default:
      return state
  }
}
