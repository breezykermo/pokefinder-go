import { takeLatest } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import * as userActions from '../user/actions'
import localStorage from '../../api/local'

import { Linking, PushNotificationIOS } from 'react-native'
// import PushNotification from 'react-native-push-notification'

function* saveWatchlist(action) {
  try {
    // NB: select pulls state AFTER action has been handled by reducer
    const watchlist = yield select(state => state.user.get('watchlist'))
    yield localStorage.watchlist.set(watchlist)
    const savedWatchlist = yield localStorage.watchlist.get()
    yield put(userActions.watchlistSaved(savedWatchlist))

    // HACK push
    if (action.id === 13) {
      PushNotificationIOS.presentLocalNotification({
        alertBody: 'There\'s a Blastoise in your area!', // (required)
        // playSound: false, // (optional) default: true
        // number: 10, // (optional) default: none (Cannot be zero)
      })
    }

    if (action.id === 18) {
      Linking.openURL('b335b2fc-69dc-472c-9e88-e6c97f84091c-3://')
    }
  } catch (e) {
    // TODO: log error
    console.log(`error: ${e.message}`) // eslint-disable-line no-console
  }
}

export default function* watchWatchlist() {
  yield* takeLatest(userActions.TOGGLE_POKEMON, saveWatchlist)
}
