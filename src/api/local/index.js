import store from 'react-native-simple-store'

const WATCHED_KEY = 'pokefindergo/WATCHED'

export default {
  watched: {
    get: () => store.get(WATCHED_KEY),
    set: value => store.save(WATCHED_KEY, value),
  },
}
