import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from '../actions/types'

const initialstate = {}

const signInSuccess = (state, payload) => {
  const { token, session } = payload
  return {
    token,
    session
  }
}

const signOutSuccess = () => {
  return {}
}

const handlers = {
  [SIGN_IN_SUCCESS]: signInSuccess,
  [SIGN_OUT_SUCCESS]: signOutSuccess
}

const authReducer = (state = initialstate, action) => {
  const { type, payload } = action
  const handler = handlers[type]

  return handler ? handler(state, payload) : state
}

const persistConfig = {
  storage,
  key: 'auth'
}

export default persistReducer(persistConfig, authReducer)