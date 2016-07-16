import React, { PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { requestSightings } from '../../reducers/pokecrew/actions'

class GeoLoc extends React.Component {
  propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.watchID = (null: ?number)
  }

  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position)
        this.setState({ initialPosition })
      },
      error => alert(error.message), // eslint-disable-line no-alert
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    )
    this.watchID = navigator.geolocation.watchPosition(position => {
      const lastPosition = JSON.stringify(position)
      this.setState({ lastPosition })
      // dispatch action to sagas to handle
      this.props.dispatch(requestSightings())
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
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
