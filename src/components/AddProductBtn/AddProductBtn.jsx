import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { ADD_PRODUCT } from '../../reducer/basketReducer.js'
import { useDispatchBasket } from '../../store/useStore.js'

const AddProductBtn = ({ id, products, singleProduct }) => {
  const dispatch = useDispatchBasket()

  const handleBuyProduct = () => {
    const product = products ? products.find((e) => e.id === id) : singleProduct

    dispatch({ type: ADD_PRODUCT, payload: product })
  }

  return (
    <Button variant='contained' onClick={handleBuyProduct}>
      Buy
    </Button>
  )
}

AddProductBtn.propTypes = {
  id: PropTypes.number.isRequired,
  products: PropTypes.array,
  singleProduct: PropTypes.object,
}

export default AddProductBtn
