import { Container, Grid } from '@mui/material'
import PropTypes from 'prop-types'
import styles from './MainContainer.styles.js'

const MainContainer = ({ children }) => {
  return (
    <Container component="main" maxWidth="lg" sx={styles.container}>
      <Grid container spacing={5}>
        {children}
      </Grid>
    </Container>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
