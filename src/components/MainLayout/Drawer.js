import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Divider,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { drawerWidth } from '.'

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  navLink: {
    textDecoration: 'none',
    color: '#101010'
  }
}))

const CustomDrawer = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles()
  const theme = useTheme()

  const drawerList = [{
    name: 'Home',
    icon: 'home',
    link: '/home'
  }]

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerList.map((element) => (
          <NavLink to={element.link} key={element.name} className={classes.navLink}>
            <ListItem divider button>
              <ListItemIcon>
                <Icon color="action">{element.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={element.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  )

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

CustomDrawer.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired
}

export default withRouter(CustomDrawer)
