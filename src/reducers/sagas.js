import { takeEvery, takeLatest } from 'redux-saga' // eslint-disable-line no-unused-vars
import { fork, call, put, select } from 'redux-saga/effects' // eslint-disable-line no-unused-vars
import localStorage from '../api/local'
import * as locationActions from './location/actions'
import * as userActions from './user/actions'

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
    const watched = yield select(state => state.user.get('watchlist'))
    console.log(watched) // eslint-disable-line no-console
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
