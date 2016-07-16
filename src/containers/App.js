import React from 'react'
import {
  View,
} from 'react-native'
import styles from './App.styles.js'
import Topbar from '../components/Topbar'
import GeoLoc from '../components/GeoLoc'

export default () => (
  <View style={styles.container}>
    <Topbar />
    <GeoLoc />
  </View>
)
