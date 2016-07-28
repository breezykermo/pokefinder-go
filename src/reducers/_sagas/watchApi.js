import { takeLatest } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import * as locationActions from '../location/actions'
import remote from '../../api/remote'

function* fetchPokemon() {
  try {
    const dt = yield remote.fetchPokecrew(37.79306534428667, -122.41104125976562)
    console.log('pokecrew', dt) // eslint-disable-line no-console
    // const data = yield remote.fetchPokeradar(37.78738059991135, -122.39927037277221)
    // console.log('pokeradar', data)
  } catch (e) {
    console.log(`error: ${e}`) // eslint-disable-line no-console
  }
}

function* watchHeartbeat() {
  yield* takeLatest(locationActions.LOG_HEARTBEAT_EVENT, fetchPokemon)
}

function* watchApi() {
  fork(watchHeartbeat)
  yield* takeLatest(locationActions.UPDATE_CURRENT_LOCATION, fetchPokemon)
}

export default watchApi
