import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { DELETE_PRODUCT } from '../../reducer/basketReducer.js'
import { useDispatchBasket } from '../../store/useStore.js'
import styles from './DeleteProductBtn.styles.js'

const DeleteProductBtn = ({ id }) => {
  const dispatch = useDispatchBasket()

  const handleDelete = () => {
    dispatch({ type: DELETE_PRODUCT, payload: id })
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      sx={styles.btn}
      onClick={handleDelete}
    >
      Remove
    </Button>
  )
}

DeleteProductBtn.propTypes = {
  id: PropTypes.number.isRequired,
}

export default DeleteProductBtn
