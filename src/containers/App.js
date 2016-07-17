import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import { connect } from 'react-redux'
import styles from './App.styles.js'

import GeoLoc from '../components/GeoLoc'
import Topbar from '../components/Topbar'
import BodyHeader from '../components/BodyHeader'
import PokemonGrid from '../components/PokemonGrid'

const App = ({ dispatch }) => (
  <View style={styles.container}>
    <GeoLoc dispatch={dispatch} />
    <Topbar />
    <BodyHeader watchlistCount={2} />
    <PokemonGrid />
  </View>
)
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(() => ({}))(App)
