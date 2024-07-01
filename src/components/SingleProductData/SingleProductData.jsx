import { Box, Typography } from '@mui/material'
import { useAsyncValue } from 'react-router-dom'
import SingleProductContainer from '../../componentsUI/SingleProductContainer'
import SingleProductSwiper from '../../componentsUI/SingleProductSwiper'
import AddProductBtn from '../AddProductBtn'
import styles from './SingleProductData.styles.js'

const SingleProductData = () => {
  const product = useAsyncValue()
  const { images, description, price, title, id } = product

  return (
    <SingleProductContainer>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      <SingleProductSwiper images={images} />
      <Box sx={styles.box}>
        <Typography variant='h5' component='h2' gutterBottom>
          ${price}
        </Typography>
        <Typography variant='body1' component='p'>
          {description}
        </Typography>
        <AddProductBtn id={id} singleProduct={product} />
      </Box>
    </SingleProductContainer>
  )
}

export default SingleProductData
