import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import codePush from 'react-native-code-push'
import { connect } from 'react-redux'
import { updateSearch, loadUser } from '../reducers/user/actions'
import styles from './App.styles.js'
import LocationLog from '../components/LocationLog'
import GeoLoc from '../components/GeoLoc'
import Topbar from '../components/Topbar'
import BodyHeader from '../components/BodyHeader'
import PokemonGrid from '../components/PokemonGrid'
import { getWatched } from '../utils'
import features, { ifEnabled } from '../common/toggles'

class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
    pokemon: PropTypes.object,
    location: PropTypes.object,
  }

  static defaultProps = {
    user: { watchlist: 0 },
  }

  constructor(props) {
    super(props)
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }

  componentDidMount() {
    codePush.sync()
    this.props.dispatch(loadUser())
  }

  onSearchHandler(text) {
    this.props.dispatch(updateSearch(text))
  }

  render() {
    const { dispatch, user, pokemon, location } = this.props
    return (
      <View style={styles.container}>
        <GeoLoc dispatch={dispatch} />
        <Topbar onChangeTextHandler={this.onSearchHandler} />
        <BodyHeader watchlistCount={user.watchlist.length || 0} />
        <PokemonGrid
          pokemonData={
            getWatched(pokemon.data, user.watchlist)
              .filter(poke => {
                if (user.search.length < 1) return true
                return (poke.name.search(user.search) !== -1)
              })
          }
          dispatch={dispatch}
        />
        {ifEnabled(features.LOCATION_MONITORING, () => (
          <LocationLog
            location={location}
            x={location.current.coords.latitude}
            y={location.current.coords.longitude}
            logs={location.logs}
          />
        ))}
      </View>
    )
  }
}

export default connect(
  state => ({
    user: state.user.toJS(),
    pokemon: state.pokemon.toJS(),
    location: state.location.toJS(),
  })
)(App)
