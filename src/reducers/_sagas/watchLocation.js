import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'
import * as locationActions from '../location/actions'

function* locationUpdate({ location }) {
  try {
    // TODO: Put location logic here.
    console.log('watchLocation saga: ', location)
  } catch (e) {
    yield put(locationActions.updateBackgroundLocationError(e.message))
  }
}

function* errorUpdate(action) {
  try {
    alert(`Location error: ${error}`)
  } catch (e) {
    console.log('No idea.')
  }
}


function* watchLocationError() {
  yield takeLatest(locationActions.UPDATE_BACKGROUND_LOCATION_ERROR, errorUpdate)
}

export default function* watchLocation() {
  fork(watchLocationError)
  yield* takeLatest(locationActions.UPDATE_CURRENT_LOCATION, locationUpdate)
}
