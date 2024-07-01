import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import DecrementProductBtn from '../../components/DecrementProductBtn'
import DeleteProductBtn from '../../components/DeleteProductBtn'
import IncrementProductBtn from '../../components/IncrementProductBtn'
import styles from './BasketData.styles.js'

const BasketData = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={styles.card}>
        <CardMedia
          component='img'
          height='200'
          image={product.images[0]}
          alt={product.title}
        />
        <CardContent sx={styles.cardContent}>
          <Typography variant='h6' sx={styles.title}>
            {product.title}
          </Typography>
          <Box sx={styles.box}>
            <Typography variant='h6'>${product.price}</Typography>
            <Box sx={styles.boxText}>
              <DecrementProductBtn id={product.id} />
              <Typography variant='body1' sx={styles.text}>
                {product.count}
              </Typography>
              <IncrementProductBtn id={product.id} />
            </Box>
          </Box>
          <DeleteProductBtn id={product.id} />
        </CardContent>
      </Card>
    </Grid>
  )
}

BasketData.propTypes = {
  product: PropTypes.object.isRequired,
}

export default BasketData
