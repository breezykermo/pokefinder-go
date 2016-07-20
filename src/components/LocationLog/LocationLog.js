import React, { PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './LocationLog.styles'

const LocationLog = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.aProp || 'LocationLog'}</Text>
  </View>
)
LocationLog.propTypes = {
  aProp: PropTypes.string,
}

export default LocationLog