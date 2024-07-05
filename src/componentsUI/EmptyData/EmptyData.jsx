import { Box, Typography } from '@mui/material'
import styles from './EmptyData.styles.js'

const EmptyData = () => {
  return (
    <Box sx={styles.box}>
      <Typography variant="h4" color="textSecondary">
        Sorry, no categories available.
      </Typography>
    </Box>
  )
}

export default EmptyData
