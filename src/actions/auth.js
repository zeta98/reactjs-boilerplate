import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from './types'

export const signInSuccess = ({ token, session }) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    token,
    session
  }
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
  payload: {}
})
