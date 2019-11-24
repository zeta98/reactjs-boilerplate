import { applyMiddleware, createStore } from 'redux'

import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(logger))
  return store
}

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}
