import defaultState from './defaultState'
import { TOGGLE_POKEMON, UPDATE_SEARCH, UPDATE_WATCHLIST } from './actions'
import { updateWatchlistByToggle } from '../../utils'

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_POKEMON:
      return state.set('watchlist', updateWatchlistByToggle(state, action))

    case UPDATE_SEARCH:
      return state.set('search', action.search)

    case UPDATE_WATCHLIST:
      return state.set('watchlist', action.watchlist)

    default:
      return state
  }
}
