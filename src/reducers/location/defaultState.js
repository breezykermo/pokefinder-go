import { fromJS } from 'immutable'
export default fromJS({
  current: {
    x: null,
    y: null,
  },
  logs: {
    activityChange: null,
    heartbeat: null,
    motionChange: null,
    error: null,
    providerChange: null,
  },
})
