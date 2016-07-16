import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './Topbar.styles'

const Topbar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>PokedexGo</Text>
  </View>
)

export default Topbar
