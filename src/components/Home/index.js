import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core'

import { signOutSuccess } from '../../actions/auth'
import { signOut } from '../../api/auth'

const HomePage = () => {
  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutSuccess()))
  }

  return (
    <Card>
      <CardHeader title="Home Page" />
      <CardContent>
        <Typography>This is the <strong>HOME</strong> page.</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleSignOut}>
          Sign Out
        </Button>
      </CardActions>
    </Card>
  )
}

export default HomePage
