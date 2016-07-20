import React, { PropTypes } from 'react'
import {
  AppState,
  View,
} from 'react-native'
import config from './config'
import BackgroundGeolocation from 'react-native-background-geolocation'
import PushNotification from 'react-native-push-notification'
import {
  updateCurrentLocation,
  updateBackgroundLocationError,
} from '../../reducers/location/actions'

class GeoLoc extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    /* Background Geolocation */
    this.bgGeo = BackgroundGeolocation
    this.bgGeo.configure(config.bgGeo, state => {
      console.log('- Configure success.  Current state: ', state) // eslint-disable-line no-console
    })
    AppState.addEventListener('change', this.onAppStateChange.bind(this))
    this.bgGeo.on('location', this.onBackgroundLocationChange.bind(this))
    this.bgGeo.on('error', this.onBackgroundLocationError.bind(this))
    /* Start */
    const bgGeo = this.bgGeo
    const dispatch = this.props.dispatch
    bgGeo.start(() => {
      console.log('- [js] BackgroundGeolocation started successfully')
      bgGeo.getCurrentPosition({ timeout: 30 }, location => {
        console.log('- [js received current position: ', JSON.stringify(location))
        dispatch(updateBackgroundLocationError(location))
      }, error => {
        dispatch(updateBackgroundLocationError(error))
      })
    })
    /* PushNotifications */
    PushNotification.configure(config.pushNotification)
  }

  state = {
    position: 'unknown',
  }

  componentDidMount() {
    const me = this
    this.bgGeo.getCurrentPosition(location => {
      me.setState({
        position: JSON.stringify(location),
      })
    })
  }

  onAppStateChange(state) {
    // state is one of ['active', 'inactive', 'background']
    console.log(state) // eslint-disable-line no-console
  }

  onBackgroundLocationChange(location) {
    console.log('location event triggered:', location) // eslint-disable-line no-console
    this.setState({
      position: location,
    })
    this.props.dispatch(updateCurrentLocation(location))
  }

  onBackgroundLocationError(error) {
    this.props.dispatch(updateBackgroundLocationError(error))
  }

  render() {
    return (
      <View />
    )
  }
}

export default GeoLoc
