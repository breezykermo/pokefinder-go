import store from 'react-native-simple-store'
import { fromJS } from 'immutable'

const WATCHED_KEY = 'poke/WATCHED'

export default {
  watchlist: {
    get: () => store.get(WATCHED_KEY).then(val => fromJS(val)),
    set: value => store.save(WATCHED_KEY, value),
  },
}
