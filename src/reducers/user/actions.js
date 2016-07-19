export const TOGGLE_POKEMON = 'TOGGLE_POKEMON'
export const togglePokemon = (id) => ({
  type: TOGGLE_POKEMON,
  id,
})

export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const updateSearch = search => ({
  type: UPDATE_SEARCH,
  search,
})
