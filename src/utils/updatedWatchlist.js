export const updatedWatchlist = (state, action) => {
  const pokeNo = action.id - 1
  const watchlist = state.get('watchlist')
  let newState
  const ind = watchlist.toJS().indexOf(pokeNo)
  if (ind !== -1) {
    newState = state.set('watchlist', watchlist.delete(ind))
  } else {
    newState = state.set('watchlist', watchlist.push(pokeNo))
  }
  console.log(newState.toJS())
  return newState.get('watchlist')
}
