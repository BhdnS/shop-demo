import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AddProductBtn from '../../components/AddProductBtn'
import styles from './Products.styles.js'

const Products = ({ product, products }) => {
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
          <Typography
            variant='h6'
            sx={styles.link}
            component={Link}
            to={`/products/${product.id}`}
          >
            {product.title}
          </Typography>
          <Box sx={styles.box}>
            <Typography variant='h6'>${product.price}</Typography>
            <AddProductBtn id={product.id} products={products} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

Products.propTypes = {
  product: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
}

export default Products
