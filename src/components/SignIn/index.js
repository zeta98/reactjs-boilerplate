import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Typography,
  LinearProgress
} from '@material-ui/core'
import PropTypes from 'prop-types'

import { getAccessToken } from '../../reducers/selectors'
import { signIn } from '../../api/auth'
import { signInSuccess } from '../../actions/auth'

const SignInPage = ({ location }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const token = useSelector(getAccessToken)
  const { from } = location.state || { from: { pathname: '/home' } }

  if (token) return (<Redirect to={from} />)
  const dispatch = useDispatch()

  const handleSignIn = () => {
    setLoading(true)
    signIn({
      username: 'fakeUsername',
      password: 'fakePassword'
    })
      .then((res) => {
        setLoading(false)
        const { token, session } = res
        dispatch(signInSuccess({ token, session }))
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }

  return (
    <Card>
      <CardHeader title="This is the sign in page" />
      <CardContent>
        <Typography>Sign In </Typography>
        {error && (
          <Typography>{JSON.stringify(error)}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button onClick={handleSignIn}>
          Sign In
        </Button>
      </CardActions>
      {loading && <LinearProgress />}
    </Card>
  )
}

SignInPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default SignInPage