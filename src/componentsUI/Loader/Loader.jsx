import { Box, CircularProgress } from '@mui/material'
import styles from './Loader.styles.js'

const Loader = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  )
}

export default Loader
