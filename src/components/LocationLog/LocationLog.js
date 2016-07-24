import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from './LocationLog.styles'

const LocationLog = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{'Location'}</Text>
    <Text style={styles.body}>{`x: ${props.x || 'None'}`}</Text>
    <Text style={styles.body}>{`y: ${props.y || 'None'}`}</Text>
    {Object.keys(props.logs)
      .map((key, ind) => <Text key={ind}>{props.logs[key]}</Text>)}
    <TouchableOpacity onPress={props.onPressHandler} />
  </View>
)
LocationLog.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
  logs: PropTypes.string,
  onPressHandler: PropTypes.func,
}

export default LocationLog
