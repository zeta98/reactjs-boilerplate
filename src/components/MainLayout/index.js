import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import CustomDrawer from './Drawer'
import CustomAppBar from './AppBar'

export const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px - ${theme.spacing(2) * 2})`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: theme.mixins.toolbar
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
      <CustomDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MainLayout
