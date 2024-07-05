import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useBasketLength } from '../../store/useStore.js'
import styles from './NavBar.styles.js'

const NavBar = () => {
  const basket = useBasketLength()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={styles.title}>
          Shop
        </Typography>
        <Box sx={styles.box}>
          <Link underline="none" color="inherit" component={NavLink} to="/">
            Home
          </Link>
          <Link underline="none" color="inherit" component={NavLink} to="categories">
            Categories
          </Link>
          <Link underline="none" color="inherit" component={NavLink} to="basket">
            Basket: {basket}
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
