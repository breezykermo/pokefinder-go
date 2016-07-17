import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'

export const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const middlewares = [
    applyMiddleware(sagaMiddleware),
  ]
  if (__DEV__) {
    if (global.reduxNativeDevTools) middlewares.push(global.reduxNativeDevTools())
  }
  return createStore(
    reducers,
    initialState,
    compose(
      ...middlewares
    )
  )
}
