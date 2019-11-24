import axios from 'axios'

import { signOutSuccess } from '../actions/auth'
import { store } from '../store'
import config from '../config'

const axiosClient = () => {
  const { url } = config
  const { token } = store.getState().auth
  let headers = {}

  if (token) {
    headers = {
      'access-token': token,
      'Content-Type': 'application/json',
    }
  }

  const client = axios.create({
    baseURL: url,
    headers,
  })

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return Promise.reject({ errors: ['Connection error'] })
      }

      if (error.response.status === 401 && token) {
        store.dispatch(signOutSuccess())
      }

      return Promise.reject(error.response.data)
    }
  )

  return client
}

export default axiosClient
