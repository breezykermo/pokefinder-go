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
import { getWatched } from '../utils'

class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
    pokemon: PropTypes.object,
  }

  static defaultProps = {
    user: { watchlist: 0 },
  }

  constructor(props) {
    super(props)
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }

  onSearchHandler(text) {
    console.log(text)
  }

  render() {
    const { dispatch, user, pokemon } = this.props
    console.log(user.watchlist)
    return (
      <View style={styles.container}>
        <GeoLoc dispatch={dispatch} />
        <Topbar onChangeTextHandler={this.onSearchHandler} />
        <BodyHeader watchlistCount={user.watchlist.length || 0} />
        <PokemonGrid
          pokemonData={getWatched(pokemon.data, user.watchlist)}
          dispatch={dispatch}
        />
      </View>
    )
  }
}

export default connect(
  state => ({
    user: state.user.toJS(),
    pokemon: state.pokemon.toJS(),
  })
)(App)
