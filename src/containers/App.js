import React from 'react'
import {
  View,
} from 'react-native'
import styles from './App.styles.js'
import Topbar from '../components/Topbar'
import BottomBar from '../components/BottomBar'
import Pokedex from '../components/Pokedex'

export default () => (
  <View style={styles.container}>
    <Topbar />
    <Pokedex />
    <BottomBar />
  </View>
)
