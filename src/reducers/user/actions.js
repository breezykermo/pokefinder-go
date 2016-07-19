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

export const UPDATE_WATCHLIST = 'UPDATE_WATCHLIST'
export const updateWatchlist = (watchlist) => ({
  type: UPDATE_WATCHLIST,
  watchlist,
})

export const WATCHLIST_SAVED = 'WATCHLIST_SAVED'
export const watchlistSaved = (watchlist) => ({
  type: WATCHLIST_SAVED,
  watchlist,
})

export const LOAD_USER = 'LOAD_USER'
export const loadUser = () => ({
  type: LOAD_USER,
})
