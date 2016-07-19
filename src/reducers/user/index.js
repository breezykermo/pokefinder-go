import defaultState from './defaultState'
import { TOGGLE_POKEMON, UPDATE_SEARCH, UPDATE_WATCHLIST } from './actions'
import { updatedWatchlist } from '../../utils'

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_POKEMON:
      console.log(updatedWatchlist(state, action).toJS())
      return state.set('watchlist', updatedWatchlist(state, action))

    case UPDATE_SEARCH:
      return state.set('search', action.search)

    case UPDATE_WATCHLIST:
      return state // NB: just an indication that local storage was updated

    default:
      return state
  }
}
