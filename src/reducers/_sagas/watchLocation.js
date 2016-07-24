import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'
import * as locationActions from '../location/actions'

function* locationUpdate({ location }) {
  try {
    // TODO: Put location logic here.
    console.log('watchLocation saga: ', location)
  } catch (e) {
    yield put(locationActions.longErrorEvent(e.message))
  }
}

function* errorUpdate(action) {
  try {
    const { type, code } = action.error
    alert(`${type} Error: ${code}`)
  } catch (e) {
    console.log('No idea.')
  }
}


function* watchLocationError() {
  yield takeLatest(locationActions.LOG_ERROR_EVENT, errorUpdate)
}

export default function* watchLocation() {
  fork(watchLocationError)
  yield* takeLatest(locationActions.UPDATE_CURRENT_LOCATION, locationUpdate)
}
