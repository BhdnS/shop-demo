import { Box, Button, Container, Typography } from '@mui/material'
import { Link, useAsyncError } from 'react-router-dom'
import styles from './ErrorPage.styles.js'

const ErrorPage = () => {
  const error = useAsyncError()

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={styles.box}>
        {!error && (
          <>
            <Typography variant='h1' component='h1' gutterBottom>
              404
            </Typography>
            <Typography variant='h5' component='h2' gutterBottom>
              Oops! Page not found.
            </Typography>
            <Typography variant='h6' gutterBottom>
              The page you are looking for does not exist.
            </Typography>
          </>
        )}
        {error && (
          <Typography variant='h1' component='h1' gutterBottom>
            {error.message}
          </Typography>
        )}
        <Button variant='contained' color='primary' component={Link} to={'/'}>
          Go Home
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorPage
