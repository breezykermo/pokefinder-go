import React, { PropTypes } from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './LocationLog.styles'

const LocationLog = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{'Location'}</Text>
    <Text style={styles.body}>{`x: ${props.x || 'None'}`}</Text>
    <Text style={styles.body}>{`y: ${props.y || 'None'}`}</Text>
  </View>
)
LocationLog.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
}

export default LocationLog