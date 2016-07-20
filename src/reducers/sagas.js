import { fork } from 'redux-saga/effects'

import watchUser from './_sagas/watchUser'
import watchLocation from './_sagas/watchLocation'
import watchWatchlist from './_sagas/watchWatchlist'

export default function* root() {
  yield fork(watchUser)
  yield fork(watchWatchlist)
  yield fork(watchLocation)
}

// import * as userActions from './user/actions'
// import remote from '../api/remote'

// function* fetchPokemon() {
//   try {
//     const dt = yield remote.fetchPokecrew(37.78738059991135, 122.39927037277221)
//     console.log('pokecrew', dt)
//     const data = yield remote.fetchPokeradar(37.78738059991135, 122.39927037277221)
//     console.log('pokeradar', data)
//   } catch (e) {
//     console.log(`error: ${e}`)
//   }
// }

// function* testApi() {
//   yield *takeLatest(userActions.WATCHLIST_SAVED, fetchPokemon)
// }
