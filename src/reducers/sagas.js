import { takeEvery, takeLatest } from 'redux-saga' // eslint-disable-line no-unused-vars
import { fork, call, put, select } from 'redux-saga/effects' // eslint-disable-line no-unused-vars

import * as locationActions from './location/actions'
import * as userActions from './user/actions'

import localStorage from '../api/local'

function* diffLocation(action) {
  try {
    console.log(action) // eslint-disable-line no-console
    yield put(locationActions.diffLocationSuccess())
  } catch (e) {
    yield put(locationActions.diffLocationFailure(e.message))
  }
}

function* watchLocation() {
  yield* takeLatest(locationActions.DIFF_LOCATION_REQUEST, diffLocation)
}


function* localStoreWatched(action) {
  try {
    // NB: select pulls state AFTER action has been handled by reducer
    const watchlist = yield select(state => state.user.get('watchlist'))
    yield localStorage.watchlist.set(watchlist)
    const savedWatchlist = yield localStorage.watchlist.get()
    console.log(savedWatchlist)
    yield put(userActions.updateWatchlist(savedWatchlist))
  } catch (e) {
    console.log(`error: ${e}`) // eslint-disable-line no-console
  }
}

function* watchUser() {
  yield* takeLatest(userActions.TOGGLE_POKEMON, localStoreWatched)
}

export default function* root() {
  yield fork(watchUser)
  yield fork(watchLocation)
}
