import React, { PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './LocationLog.styles'

const LocationLog = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{'Location'}</Text>
    <Text style={styles.body}>{JSON.stringify(props.location)}</Text>
  </View>
)
LocationLog.propTypes = {
  location: PropTypes.any,
  x: PropTypes.string,
  y: PropTypes.string,
  logs: PropTypes.object,
  onPressHandler: PropTypes.func,
}

export default LocationLog
