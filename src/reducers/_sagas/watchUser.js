import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as userActions from '../user/actions'

function* loadUser() {
  try {
    const savedWatchlist = yield localStorage.watchlist.get()
    if (savedWatchlist) {
      yield put(userActions.updateWatchlist(savedWatchlist))
    } else {
      console.log('No saved watchlist')
    }
  } catch (e) {
    // TODO: log error
    console.log(`error: ${e.message}`)
  }
}

export default function* watchUser() {
  yield* takeLatest(userActions.LOAD_USER, loadUser)
}
