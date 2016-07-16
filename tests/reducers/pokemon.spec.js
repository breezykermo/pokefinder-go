import test from 'ava'
import reducer from '../../src/reducers/pokemon'
import defaultState from '../../src/reducers/pokemon/defaultState'
import * as actions from '../../src/reducers/pokemon/actions'

// reducer testing
test('generates default state from undefined', t => {
  const state = reducer(undefined, { type: 'NONE' })
  t.is(state, defaultState)
})
