import React from 'react'
import { View, Text } from 'react-native'
import styles from './BodyHeader.styles'

const BodyHeader = () => (
  <View style={styles.container}>
    <Text style={styles.leftText}>BodyHeader</Text>
    <Text style={styles.rightText}>BodyHeader</Text>
  </View>
)

export default BodyHeader
