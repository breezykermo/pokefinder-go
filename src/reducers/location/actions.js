export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION'
export const updateCurrentLocation = (location) => ({
  type: UPDATE_CURRENT_LOCATION,
  location,
})

export const LOG_ACTIVITY_CHANGE_EVENT = 'LOG_ACTIVITY_CHANGE_EVENT'
export const logActivityChangeEvent = (log) => ({
  type: LOG_ACTIVITY_CHANGE_EVENT,
  log,
})

export const LOG_HEARTBEAT_EVENT = 'LOG_HEARTBEAT_EVENT'
export const logHeartbeatEvent = (log) => ({
  type: LOG_HEARTBEAT_EVENT,
  log,
})

export const LOG_MOTION_CHANGE_EVENT = 'LOG_MOTION_CHANGE_EVENT'
export const logMotionChangeEvent = (log) => ({
  type: LOG_MOTION_CHANGE_EVENT,
  log,
})

export const LOG_ERROR_EVENT = 'LOG_ERROR_EVENT'
export const logErrorEvent = (log) => ({
  type: LOG_ERROR_EVENT,
  log,
})

export const LOG_PROVIDER_CHANGE_EVENT = 'LOG_PROVIDER_CHANGE_EVENT'
export const logProviderChangeEvent = (log) => ({
  type: LOG_PROVIDER_CHANGE_EVENT,
  log,
})

