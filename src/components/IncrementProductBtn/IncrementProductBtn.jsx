import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { INCREMENT_COUNT } from '../../reducer/basketReducer.js'
import { useDispatchBasket } from '../../store/useStore.js'
import styles from './IncrementProductBtn.styles.js'

const IncrementProductBtn = ({ id }) => {
  const dispatch = useDispatchBasket()

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNT, payload: id })
  }

  return (
    <Button variant="outlined" size="small" sx={styles.btn} onClick={handleIncrement}>
      +
    </Button>
  )
}

IncrementProductBtn.propTypes = {
  id: PropTypes.number.isRequired,
}

export default IncrementProductBtn
