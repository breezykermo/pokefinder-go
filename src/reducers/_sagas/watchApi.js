import { takeLatest } from 'redux-saga'
import * as userActions from '../user/actions'
import remote from '../../api/remote'

function* fetchPokemon() {
  try {
    const dt = yield remote.fetchPokecrew(37.79306534428667, -122.41104125976562)
    console.log('pokecrew', dt)
    const data = yield remote.fetchPokeradar(37.78738059991135, -122.39927037277221)
    console.log('pokeradar', data)
  } catch (e) {
    console.log(`error: ${e}`)
  }
}

function* testApi() {
  yield* takeLatest(userActions.WATCHLIST_SAVED, fetchPokemon)
}

export default testApi
