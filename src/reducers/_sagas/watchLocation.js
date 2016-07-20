import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as locationActions from '../location/actions'

function* diffLocation(action) {
  try {
    // TODO: Put location logic here.
  } catch (e) {
    yield put(locationActions.diffLocationFailure(e.message))
  }
}

export default function* watchLocation() {
  yield* takeLatest(locationActions.DIFF_LOCATION_REQUEST, diffLocation)
}
