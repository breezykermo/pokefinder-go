import { fromJS } from 'immutable'
export default fromJS({
  current: {
    x: null,
    y: null,
  },
  log: {
    activityChange: null,
    heartbeat: null,
    motionChange: null,
    error: null,
    providerChange: null,
  },
})
