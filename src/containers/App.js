import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import { connect } from 'react-redux'
import styles from './App.styles.js'
import Topbar from '../components/Topbar'
import GeoLoc from '../components/GeoLoc'

const App = ({ dispatch }) => (
  <View style={styles.container}>
    <GeoLoc dispatch={dispatch} />
    <Topbar />
  </View>
)
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(() => ({}))(App)
