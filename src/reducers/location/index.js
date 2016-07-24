import defaultState from './defaultState'
import * as t from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case t.UPDATE_CURRENT_LOCATION:
      return state.set('current', action.location)

    // Logs
    case t.LOG_ACTIVITY_CHANGE_EVENT:
      return state.setIn(['logs', 'activityChange'], action.log)
    case t.LOG_HEARTBEAT_EVENT:
      return state.setIn(['logs', 'heartbeat'], action.log)
    case t.LOG_MOTION_CHANGE_EVENT:
      return state.setIn(['logs', 'motionChange'], action.log)
    case t.LOG_ERROR_EVENT:
      return state.setIn(['logs', 'error'], action.log)
    case t.LOG_PROVIDER_CHANGE_EVENT:
      return state.setIn(['logs', 'providerChange'], action.log)

    default:
      return state
  }
}
