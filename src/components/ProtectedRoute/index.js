import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import MainLayout from '../MainLayout'
import { getAccessToken } from '../../reducers/selectors'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(getAccessToken)

  return (
    <Route
      {...rest}
      render={(params) =>
        authenticated ? (
          <MainLayout>
            <Component {...params} />
          </MainLayout>
        ) : (
          <Redirect
            to={{ pathname: '/sign_in', state: { from: params.location } }}
          />
        )
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default ProtectedRoute
