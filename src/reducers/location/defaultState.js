import { fromJS } from 'immutable'
export default fromJS({
  current: {
    coords: {
      latitude: null,
      longitude: null,
    },
  },
  logs: {
    activityChange: null,
    heartbeat: null,
    motionChange: null,
    error: null,
    providerChange: null,
  },
})
