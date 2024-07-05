import { Box, Container } from '@mui/material'
import PropTypes from 'prop-types'
import styles from './SingleProductContainer.styles.js'

const SingleProductContainer = ({ children }) => {
  return (
    <Container component="main" maxWidth="md" sx={styles.container}>
      <Box sx={styles.box}>{children}</Box>
    </Container>
  )
}

SingleProductContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SingleProductContainer
