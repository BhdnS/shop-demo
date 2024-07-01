import { Box, Grid } from '@mui/material'
import PropTypes from 'prop-types'
import BasketTotalOrder from '../../components/BasketTotalOrder'
import BasketData from '../BasketData'

const BasketContainer = ({ basketState }) => {
  return (
    <>
      <Grid container spacing={4}>
        {basketState?.map((product) => (
          <BasketData key={product.id} product={product} />
        ))}
      </Grid>
      <Box>
        <BasketTotalOrder />
      </Box>
    </>
  )
}

BasketContainer.propTypes = {
  basketState: PropTypes.array.isRequired,
}

export default BasketContainer
