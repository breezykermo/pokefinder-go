import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import config from './config'
import BackgroundGeolocation from 'react-native-background-geolocation'
import PushNotification from 'react-native-push-notification'
import * as act from '../../reducers/location/actions'

class GeoLoc extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  /* eslint-disable max-len, no-console */
  constructor(props) {
    super(props)
    /* Background Geolocation */
    BackgroundGeolocation.configure({
      desiredAccuracy: 0,
      stationaryRadius: 10,
      distanceFilter: 10,
      disableElasticity: false, // <-- [iOS] Default is 'false'.  Set true to disable speed-based distanceFilter elasticity
      locationUpdateInterval: 10,
      minimumActivityRecognitionConfidence: 80,   // 0-100%.  Minimum activity-confidence for a state-change
      fastestLocationUpdateInterval: 5000,
      activityRecognitionInterval: 10000,
      stopDetectionDelay: 1,  // <--  minutes to delay after motion stops before engaging stop-detection system
      stopTimeout: 2, // 2 minutes
      activityType: 'AutomotiveNavigation',

      // pausesLocationUpdatesAutomatically: false, // NB: only for stationary testing
      // preventSuspend: true,
      // heartbeatInterval: 10000,

      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      forceReloadOnLocationChange: false,  // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when a new location is recorded (WARNING: possibly distruptive to user)
      forceReloadOnMotionChange: false,    // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when device changes stationary-state (stationary->moving or vice-versa) --WARNING: possibly distruptive to user)
      forceReloadOnGeofence: false,        // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when a geofence crossing occurs --WARNING: possibly distruptive to user)
      stopOnTerminate: false,              // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true,                   // <-- Auto start tracking when device is powered-up.
      // HTTP / SQLite config
      url: 'http://posttestserver.com/post.php?dir=cordova-background-geolocation',
      batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
      maxDaysToPersist: 1,    // <-- Maximum days to persist a location in plugin's SQLite database when HTTP fails
      headers: {
        'X-FOO': 'bar',
      },
      params: {
        auth_token: 'maybe_your_server_authenticates_via_token_YES?',
      },
    }, state => {
      console.log('- BackgroundGeolocation is configured and ready: ', state.enabled)

      if (!state.enabled) {
        BackgroundGeolocation.start(() => {
          console.log('- Start success')
        })
      }
    })
    // This handler fires whenever bgGeo receives a location update.
    BackgroundGeolocation.on('location', (location) => {
      console.log('- [js]location: ', JSON.stringify(location))
      this.props.dispatch(act.updateCurrentLocation(location))
    })

    // This handler fires whenever bgGeo receives an error
    BackgroundGeolocation.on('error', error => {
      const log = JSON.stringify(error)
      console.log('- [js]error: ', log)
      this.props.dispatch(act.logErrorEvent(log))
    })

    // This handler fires when movement states changes (stationary->moving; moving->stationary)
    BackgroundGeolocation.on('motionchange', (location) => {
      const log = JSON.stringify(location)
      console.log('- [js]motionchanged: ', log)
      this.props.dispatch(act.logMotionChange(log))
    })

    BackgroundGeolocation.on('heartbeat', (params) => {
      const log = JSON.stringify(params)
      console.log('- [js]heartbeat: ', log)
      this.props.dispatch(act.logHeartbeatEvent(log))
    })

    // This event fires when a chnage in motion activity is detected
    BackgroundGeolocation.on('activitychange', (activityName) => {
      console.log('- Current motion activity: ', activityName)  // eg: 'on_foot', 'still', 'in_vehicle'
      this.props.dispatch(act.logActivityChangeEvent(activityName))
    })

    // This event fires when the user toggles location-services
    BackgroundGeolocation.on('providerchange', (provider) => {
      const log = JSON.stringify(provider)
      console.log('- Location provider changed: ', log)
      this.props.dispatch(act.logProviderChangeEvent(log))
    })
    /* PushNotifications */
    PushNotification.configure(config.pushNotification)
  }

  state = {
    position: 'unknown',
  }

  onAppStateChange(state) {
    // state is one of ['active', 'inactive', 'background']
    console.log(state) // eslint-disable-line no-console
  }

  onBackgroundLocationChange(location) {
    console.log('location event triggered:', location) // eslint-disable-line no-console
    this.props.dispatch(act.updateCurrentLocation(location))
  }

  render() {
    return (
      <View />
    )
  }
}

export default GeoLoc
