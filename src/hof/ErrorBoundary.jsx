import { Alert, Box, Container } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import styles from './ErrorBoundary.styles.js'

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = () => {
      setHasError(true)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleError)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleError)
    }
  }, [])

  if (hasError) {
    return (
      <Container component="main" maxWidth="xs">
        <Box sx={styles.box}>
          <Alert component={'h1'} severity="error" variant="filled">
            There was an error in the application. Please return to the home page
          </Alert>
        </Box>
      </Container>
    )
  }

  return children
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
