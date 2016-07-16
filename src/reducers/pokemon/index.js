import defaultState from './defaultState'
import * as types from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_POKEMON:
      return state.set(
        'pokemon',
        (state.get('pokemon')).merge(action.pokemon)
      )

    default:
      return state
  }
}
