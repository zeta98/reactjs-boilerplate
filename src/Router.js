import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SignInPage from './components/SignIn'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './components/Home'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign_in" component={SignInPage} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/home" component={HomePage} />
    </Switch>
  </BrowserRouter>
)

export default Router
