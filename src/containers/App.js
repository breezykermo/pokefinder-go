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

class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
  }

  static defaultProps = {
    user: { watchlist: 0 },
  }

  render() {
    const { dispatch, user } = this.props
    return (
      <View style={styles.container}>
        <GeoLoc dispatch={dispatch} />
        <Topbar />
        <BodyHeader watchlistCount={user.watchlist.count || 0} />
        <PokemonGrid dispatch={dispatch} />
      </View>
    )
  }
}

export default connect(
  state => ({
    user: state.user.toJS(),
  })
)(App)
