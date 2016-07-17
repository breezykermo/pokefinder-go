import { takeEvery, takeLatest } from 'redux-saga' // eslint-disable-line no-unused-vars
import { call, put } from 'redux-saga/effects' // eslint-disable-line no-unused-vars
import * as loc from './location/actions'

function* diffLocation(action) {
  try {
    console.log(action) // eslint-disable-line no-console
    yield put(loc.diffLocationSuccess())
  } catch (e) {
    yield put(loc.diffLocationFailure(e.message))
  }
}

export function* location() {
  yield* takeLatest(loc.UPDATE_LOCATION, diffLocation)
}
