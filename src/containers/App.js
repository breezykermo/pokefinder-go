import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import { connect } from 'react-redux'
import styles from './App.styles.js'
import Topbar from '../components/Topbar'
import BottomBar from '../components/BottomBar'
import GeoLoc from '../components/GeoLoc'

const App = () => (
  <View style={styles.container}>
    <Topbar />
    <GeoLoc />
    <BottomBar />
  </View>
)
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({}))(App)
