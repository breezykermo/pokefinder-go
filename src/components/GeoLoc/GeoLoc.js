import React, { PropTypes } from 'react'
import {
  AppState,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import CONFIG from './config'
import BackgroundGeolocation from 'react-native-background-geolocation'
// import { requestSightings } from '../../reducers/pokecrew/actions'

class GeoLoc extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.bgGeo = BackgroundGeolocation
    this.bgGeo.configure(CONFIG, state => {
      console.log('- Configure success.  Current state: ', state) // eslint-disable-line no-console
    })

    AppState.addEventListener('change', this.onAppStateChange.bind(this))
    this.bgGeo.on('location', this.onBackgroundLocationChange.bind(this))
    this.bgGeo.on('error', error => console.log(error))
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
    console.log(location) // eslint-disable-line no-console
    this.setState({
      position: location,
    })
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {JSON.stringify(this.state.position.coords)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
})

export default GeoLoc
