import defaultState from './defaultState'
import { TOGGLE_POKEMON } from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_POKEMON: {
      console.log('Toggling pokemon ')
      const watchlist = state.get('watchlist')
      let newState
      const ind = watchlist.toJS().indexOf(action.id)
      if (ind !== -1) {
        newState = state.set('watchlist', watchlist.delete(ind))
      } else {
        newState = state.set('watchlist', watchlist.push(action.id))
      }
      return newState
    }

    default:
      return state
  }
}
