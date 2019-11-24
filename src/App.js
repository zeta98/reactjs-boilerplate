import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

import Router from './Router'
import theme from './theme'
import { persistor, store } from './store'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
      <ToastContainer newestOnTop hideProgressBar autoClose={5000} />
    </PersistGate>
  </Provider>
)

export default App
