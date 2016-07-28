import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as userActions from '../user/actions'
import localStorage from '../../api/local'

function* loadUser() {
  try {
    const savedWatchlist = yield localStorage.watchlist.get()
    if (savedWatchlist) {
      yield put(userActions.updateWatchlist(savedWatchlist))
    } else {
      console.log('No saved watchlist') // eslint-disable-line no-console
    }
  } catch (e) {
    // TODO: log error
    console.log(`error: ${e.message}`) // eslint-disable-line no-console
  }
}

export default function* watchUser() {
  yield* takeLatest(userActions.LOAD_USER, loadUser)
}
