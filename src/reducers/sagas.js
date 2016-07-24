import { fork } from 'redux-saga/effects'

import watchUser from './_sagas/watchUser'
import watchLocation from './_sagas/watchLocation'
import watchWatchlist from './_sagas/watchWatchlist'
import watchApi from './_sagas/watchApi'

export default function* root() {
  yield fork(watchUser)
  yield fork(watchWatchlist)
  yield fork(watchLocation)
  yield fork(watchApi)
}
