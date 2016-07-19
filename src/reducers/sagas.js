import { takeEvery, takeLatest } from 'redux-saga' // eslint-disable-line no-unused-vars
import { fork, call, put, select } from 'redux-saga/effects' // eslint-disable-line no-unused-vars

import * as locationActions from './location/actions'
import * as userActions from './user/actions'

import localStorage from '../api/local'
import remote from '../api/remote'

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


function* saveWatchlist() {
  try {
    // NB: select pulls state AFTER action has been handled by reducer
    const watchlist = yield select(state => state.user.get('watchlist'))
    yield localStorage.watchlist.set(watchlist)
    const savedWatchlist = yield localStorage.watchlist.get()
    yield put(userActions.watchlistSaved(savedWatchlist))
  } catch (e) {
    // TODO: log error
    console.log(`error: ${e.message}`) // eslint-disable-line no-console
  }
}

function* watchWatchlist() {
  yield* takeLatest(userActions.TOGGLE_POKEMON, saveWatchlist)
}

function* loadUser() {
  try {
    const savedWatchlist = yield localStorage.watchlist.get()
    if (savedWatchlist) {
      yield put(userActions.updateWatchlist(savedWatchlist))
    }
    else {
      console.log('No saved watchlist')
    }
  } catch (e) {
    // TODO: log error
    console.log(`error: ${e.message}`)
  }
}

function* fetchPokemon() {
  try {
    const data = yield remote.fetch(37.78738059991135, 122.39927037277221)
    console.log(data)
  } catch (e) {
    console.log(`error: ${e}`)
  }
}

function* testApi() {
  yield *takeLatest(userActions.WATCHLIST_SAVED, fetchPokemon)
}


function* watchUser() {
  yield *takeLatest(userActions.LOAD_USER, loadUser)
}

export default function* root() {
  yield fork(testApi)

  yield fork(watchUser)
  yield fork(watchWatchlist)
  yield fork(watchLocation)
}
