import defaultState from './defaultState'
import { TOGGLE_POKEMON, UPDATE_SEARCH } from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_POKEMON: {
      const pokeNo = action.id - 1
      const watchlist = state.get('watchlist')
      let newState
      const ind = watchlist.toJS().indexOf(pokeNo)
      if (ind !== -1) {
        newState = state.set('watchlist', watchlist.delete(ind))
      } else {
        newState = state.set('watchlist', watchlist.push(pokeNo))
      }
      return newState
    }

    case UPDATE_SEARCH:
      return state.set('search', action.search)

    default:
      return state
  }
}
