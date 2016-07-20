import { takeLatest } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import * as userActions from '../user/actions'
import localStorage from '../../api/local'

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

export default function* watchWatchlist() {
  yield* takeLatest(userActions.TOGGLE_POKEMON, saveWatchlist)
}
