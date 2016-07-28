import React from 'react'
import {
  AppRegistry,
} from 'react-native'
import App from './containers/App'
import { Provider } from 'react-redux'
// sagas
import configureStore, { sagaMiddleware } from './store/configureStore'
import sagas from './reducers/sagas'

export default function native() {
  // remove warnings overlay
  console.disableYellowBox = true // eslint-disable-line no-console

  const store = configureStore()
  sagaMiddleware.run(sagas)

  const PokefinderGo = () => (
    <Provider store={store} >
      <App />
    </Provider>
  )

  AppRegistry.registerComponent('PokefinderGo', () => PokefinderGo)
}
