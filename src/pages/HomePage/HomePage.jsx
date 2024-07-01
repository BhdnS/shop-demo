import { Container, Typography } from '@mui/material'
import styles from './HomePage.styles.js'

const HomePage = () => {
  return (
    <Container maxWidth='lg' style={styles.container}>
      <Typography variant='h2' component='h1' gutterBottom>
        Welcome to Our Shop
      </Typography>
      <Typography variant='h5' component='p' gutterBottom>
        Discover the best products for your furry friends!
      </Typography>
    </Container>
  )
}

export default HomePage
