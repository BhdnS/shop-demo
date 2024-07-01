import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { DECREMENT_COUNT } from '../../reducer/basketReducer.js'
import { useDispatchBasket } from '../../store/useStore.js'
import styles from './DecrementProductBtn.styles.js'

const DecrementProductBtn = ({ id }) => {
  const dispatch = useDispatchBasket()

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNT, payload: id })
  }

  return (
    <Button
      variant='outlined'
      size='small'
      sx={styles.btn}
      onClick={handleDecrement}
    >
      -
    </Button>
  )
}

DecrementProductBtn.propTypes = {
  id: PropTypes.number.isRequired,
}

export default DecrementProductBtn
