import React, { PropTypes } from 'react'
import {
  View,
  NativeModules,
} from 'react-native'
import { connect } from 'react-redux'
import styles from './App.styles.js'
import Topbar from '../components/Topbar'
import BottomBar from '../components/BottomBar'

/* NB: Using native geolocation, handlers are established on app startup,
       and updates to the pokemon filtered are sent through a bridge (not
       yet implemented). There is therefore no GeoLoc component. */

const App = ({ dispatch }) => { // eslint-disable-line no-unused-vars
  const { PokeMonitor } = NativeModules
  PokeMonitor.addEvent('Birthday Party', '4 Privet Drive, Surrey')
  return (
    <View style={styles.container}>
      <Topbar />
      <BottomBar />
    </View>
  )
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  style: View.propTypes.style.isRequired,
}

export default connect(() => ({}))(App)
